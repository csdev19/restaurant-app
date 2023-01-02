export interface WindowSize {
  width: number;
  height: number;
}

export type UseWindowSizeResponse = [WindowSize, string];

export interface NavigationItem {
  path: string;
  name: string;
  active: boolean;
}
