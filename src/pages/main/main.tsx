import { screen } from '../../config/screen';
import { useAppSelector } from '../../config/store/hooks';

import { MainView } from './main.view';

export const Main = screen(() => {
  const { ...data } = useAppSelector((state) => state.main);

  return <MainView {...data} />;
});
