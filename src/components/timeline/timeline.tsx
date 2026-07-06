import moment from 'moment';
import { FC, memo, useCallback, useEffect, useState } from 'react';

import { Box, Tag } from '../';
import { BoxProps, convertToRem, effects } from '../../config/theme';
import { Typography } from '../typography';

import { TimelineItemStyles, TimelineStyles } from './timeline.styles';

export type TimelineItem = { dateStart: number; dateEnd?: number; position: string; companyName: string; projectStack?: string[] };
export type TimelineProps = BoxProps & { items: TimelineItem[] };

export const Timeline: FC<TimelineProps> = memo(({ items, ...rest }) => {
  const [list, setList] = useState<TimelineItem[]>(items.sort((a, b) => b.dateStart - a.dateStart));
  const [collapsedList, setCollapsedListState] = useState<boolean>(true);

  useEffect(() => {
    if (collapsedList) {
      setList(items.slice(0, 3));
    }
  }, [collapsedList, items]);

  const handlerClick = useCallback(() => {
    setCollapsedListState((state) => !state);
    setList(items);
  }, [items]);

  return (
    <>
      <TimelineStyles {...rest}>
        {list.map(({ dateStart, dateEnd, position, companyName, projectStack }, index) => (
          <TimelineItemStyles key={`timeline-item-${companyName}-${index}`} data-aos="fade-up">
            <Box customStyles={{ flexDirection: 'column', gap: 5 }}>
              <Typography component="p" styles="subtitle" data-hover>
                {moment.unix(dateStart).format('YYYY/MM')} - {(dateEnd && moment.unix(dateEnd).format('YYYY/MM')) ?? 'Present'}
              </Typography>

              <Box component="h2" customStyles={{ fontSize: convertToRem(24) }}>
                {position}
              </Box>

              <Typography component="h3" styles="body">
                {companyName}
              </Typography>

              {projectStack && (
                <Box modifiers={effects.horizontalList} customStyles={{ gap: 10, marginTop: '20px' }}>
                  {projectStack?.map((str) => (
                    <Tag size="small">
                      <Typography styles="extraSmall">{str}</Typography>
                    </Tag>
                  ))}
                </Box>
              )}
            </Box>
          </TimelineItemStyles>
        ))}
      </TimelineStyles>

      <Typography onClick={handlerClick} customStyles={{ cursor: 'pointer' }}>
        {!collapsedList ? 'Hide' : 'Show'} full experience
      </Typography>
    </>
  );
});
