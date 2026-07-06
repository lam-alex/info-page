import { FC, memo, ReactElement } from 'react';

import { LayoutLeftSide, LayoutMiddleSide, LayoutRightSide, LayoutStyles } from './layout.styles';

export type LayoutProps = {
  leftSide?: ReactElement;
  middleSide: ReactElement;
  rightSide?: ReactElement;
};

export const Layout: FC<LayoutProps> = memo(({ leftSide, middleSide, rightSide }) => {
  return (
    <LayoutStyles>
      {leftSide && <LayoutLeftSide>{leftSide}</LayoutLeftSide>}

      <LayoutMiddleSide>{middleSide}</LayoutMiddleSide>

      {rightSide && <LayoutRightSide />}
    </LayoutStyles>
  );
});
