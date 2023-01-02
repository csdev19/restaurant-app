import React, { FunctionComponent } from 'react';
import Modal from '@atoms/Modal';
import CheckIcon from '@shared/Icons/CheckIcon';
import { TechnologiesModalProps } from './TechnologiesModal.types';

const TechnologiesModal: FunctionComponent<TechnologiesModalProps> = ({
  data,
  open,
  onClose,
}) => (
  <Modal onClose={onClose} open={open}>
    <h3 className="text-center text-xl mb-8 mt-8 md:mt-0">{data?.title}</h3>
    <div className="flex flex-col md:flex-row">
      <figure className="md:flex w-full md:w-5/12">
        <img className="m-auto" src={data?.image} alt="" />
      </figure>
      <ul className="relative space-y-3 mt-8 md:mt-0 w-full md:w-7/12 m-auto">
        {data?.technologies.split('\n').map((skill) => (
          <li className="flex items-center space-x-2" key={skill}>
            <div style={{ color: data?.color }}>
              <CheckIcon height={20} width={20} />
            </div>
            <span className="w-full">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  </Modal>
);

export default TechnologiesModal;
