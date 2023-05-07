'use client';

import { Portal } from '@radix-ui/react-portal';
import { useRouter } from 'next/navigation';

interface ModalProps {
  children: React.ReactNode;
}

function Modal({ children }: ModalProps) {
  const router = useRouter();
  return (
    <Portal asChild>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {children}
        <button
          type="button"
          className="absolute inset-0 z-[-1] bg-gray-900/80 backdrop-blur-sm"
          onClick={() => router.back()}
        />
      </div>
    </Portal>
  );
}

export default Modal;
