'use client';

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from "next/image";

import { Typography } from "@/shared/ui";
import CloseIcon from '@/shared/assets/icons/close-icon.svg';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children?: React.ReactNode;
};

export const Modal = ({
  isOpen,
  onClose,
  title,
  description,
  children,
}: ModalProps) => {

  useEffect(() => {
    if (!isOpen) return;

    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', onEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      <div className="relative z-10 w-[360px] rounded-2xl bg-white p-6 shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-black"
          aria-label="Close modal"
        >
          <Image src={CloseIcon} alt={'close'} />
        </button>

        {title && (
          <Typography as={'p'} variant={'h3'} weight={'semibold'} className={'text-center mb-4'}>
            {title}
          </Typography>
        )}

        {description && (
          <Typography as={'p'} variant={'caption'} className={'text-center mb-[16px]'} color={'secondary'} weight={'regular'}>

            {description}
          </Typography>
        )}

        {children}
      </div>
    </div>,
    document.body,
  );
};