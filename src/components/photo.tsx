import { CornerRightUp, X } from 'lucide-react';
import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import Link from 'next/link';

interface PhotoProps {
  id?: string;
  photo?: string | StaticImageData;
  modal?: boolean;
}

export function Photo({ id, photo, modal = false }: PhotoProps) {
  if (!photo) {
    return null;
  }

  return (
    <div className="relative aspect-video w-full">
      <Image src={photo} alt="one of example photos" className="object-contain" fill />
      {modal && (
        <div className="fixed right-4 top-4 z-10 flex flex-col space-y-4">
          <Link
            href=".."
            className="flex items-center justify-center rounded-full p-2 text-slate-700 transition-all hover:bg-slate-200"
          >
            <X className="h-5 w-5" />
          </Link>
          <a
            href={`/photos/${id}`}
            className="flex items-center justify-center rounded-full p-2 text-slate-700 transition-all hover:bg-slate-200"
          >
            <CornerRightUp className="h-5 w-5" />
          </a>
        </div>
      )}
    </div>
  );
}
