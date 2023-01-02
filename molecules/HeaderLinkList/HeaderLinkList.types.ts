export interface HeadeLinkListViewProps {
  navigationUrls: NavigationUrl[];
}

interface NavigationUrl {
  active: boolean;
  path: string;
  name: string;
}
