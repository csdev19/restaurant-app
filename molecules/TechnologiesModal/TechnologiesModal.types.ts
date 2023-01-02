import { ModalBaseProps } from '@atoms/Modal';
import { DataTechnology } from '@organisms/TechnologiesSection';

export interface TechnologiesModalProps extends ModalBaseProps {
  data: DataTechnology;
}
