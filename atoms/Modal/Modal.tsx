import React, { Fragment, FunctionComponent, useEffect } from 'react';
import clsx from 'clsx';
import { Transition } from '@headlessui/react';
import CloseIcon from '@shared/Icons/CloseIcon';
import Button from '@atoms/Button';
import { ModalProps } from './Modal.types';
import styles from './Modal.module.css';

const Modal: FunctionComponent<ModalProps> = ({ open, onClose, children }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [open]);

  return (
    <Transition appear show={open} as={Fragment}>
      <div>
        <div
          className={clsx(
            'fixed',
            'z-20',
            'inset-0',
            'overflow-y-auto',
            !open && 'hidden',
          )}
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div
            className={clsx(
              'flex',
              'justify-center',
              'min-h-screen',
              'items-center',
              'text-center',
              'sm:block',
              'sm:p-0',
            )}
          >
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
            ></div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div
                className={clsx(
                  'dark:bg-cs-black',
                  'inline-block',
                  'align-bottom',
                  'bg-white',
                  'rounded-lg',
                  'text-left',
                  'shadow-xl',
                  'transform',
                  'transition-all',
                  'sm:my-8',
                  'm-0',
                  'sm:align-middle',
                  'w-full',
                  'sm:max-w-3xl',
                  'relative',
                )}
              >
                <div className="sm:h-5/6 dark:bg-cs-black sm:rounded-lg bg-white p-4 md:px-8 md:pt-8 md:pb-8 sm:p-6 sm:pb-8">
                  <div>{children}</div>
                </div>
                <div className={styles.close}>
                  <Button
                    data-testid="close-button"
                    mode="icon"
                    onClick={onClose}
                  >
                    <CloseIcon />
                  </Button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default Modal;
