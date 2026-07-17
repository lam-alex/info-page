import { useEffect, useMemo } from 'react';

import { createService } from '../service';
import { useAppDispatch } from '../store/hooks';
import { Experience, MainData, setInfo, Social } from '../store/slices/main';
import { isArrayOfType, isNumber, isString, mapToTypedArray } from '../utils';

function useDataServiceProvider() {
  const dispatch = useAppDispatch();

  const fetchingData = async (): Promise<MainData> => {
    const { origin, pathname } = window.location;

    const data: unknown = await fetch(`${origin}${pathname}/data.json`).then((r) => r.json());

    // Adding delay in 2 sec
    // await new Promise((r) => setTimeout(r, 2000));

    if (data && typeof data === 'object') {
      return {
        startExperience: 'startExperience' in data && isNumber(data.startExperience) ? data.startExperience : -1,
        socials: 'socials' in data ? mapToTypedArray<Social>(data.socials, ['name', 'link']) : null,
        experiences:
          'experiences' in data
            ? mapToTypedArray<Experience>(data.experiences, ['dateStart', 'dateEnd', 'companyName', 'position']).sort((a, b) => b.dateStart - a.dateStart)
            : null,
        skills:
          'skills' in data
            ? {
                frontend:
                  data.skills && typeof data.skills === 'object' && 'frontend' in data.skills && isArrayOfType(data.skills.frontend, isString)
                    ? data.skills.frontend
                    : [''],
                backend:
                  data.skills && typeof data.skills === 'object' && 'backend' in data.skills && isArrayOfType(data.skills.backend, isString)
                    ? data.skills.backend
                    : [''],
              }
            : {
                frontend: [],
                backend: [],
              },
      };
    }

    return {
      startExperience: -1,
      socials: [],
      experiences: [],
      skills: { frontend: [], backend: [] },
    };
  };

  useEffect(() => {
    (async () => {
      const data = await fetchingData();

      dispatch(setInfo(data));
    })();
  }, [dispatch]);

  return useMemo(() => ({}), []);
}

export const [DataServiceProvider, useDataService] = createService(useDataServiceProvider, {});
