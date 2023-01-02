import { ReactNode } from 'react';

export interface ModalBaseProps {
  open: boolean;
  onClose: () => void;
}

export interface ModalProps extends ModalBaseProps {
  children: ReactNode;
}
