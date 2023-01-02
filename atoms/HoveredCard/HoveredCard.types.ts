export type HoveredCardProps = {
  children: React.ReactNode;
  onClick?: () => void;
  emitChanges?: (hovered: boolean) => void;
};
