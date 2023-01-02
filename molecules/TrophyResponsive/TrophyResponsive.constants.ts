import { WidthSizesProps } from '@shared/hooks/useWindowSize';

export const ROW_COL_PER_SIZE: WidthSizesProps<{ row: number; col: number }> = {
  extrasmall: { row: 3, col: 2 },
  small: { row: 5, col: 1 },
  medium: { row: 3, col: 3 },
  large: { row: 2, col: 3 },
  extralarge: { row: 2, col: 6 },
};
