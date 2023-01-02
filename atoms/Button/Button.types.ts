export type ButtonBaseProps = {
  children: React.ReactNode;
  onClick: () => void;
  classNames?: string;
  color?: ButtonColors;
};

export type ButtonColors = 'primary' | 'secondary' | 'tertiary' | 'none';

export interface ButtonProps extends ButtonBaseProps {
  mode?: ButtonModes;
}

export type ButtonModes = 'raised' | 'icon';
