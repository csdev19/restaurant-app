export interface LinkBaseProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export interface LinkButtonProps extends LinkBaseProps {
  type?: LinkType;
}

export type LinkType = 'internal' | 'external';
