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
      <Image src={photo} alt={`one of example photos`} className="object-contain" fill />
      {modal && (
        <>
          <Link
            href=".."
            className="absolute right-4 top-10 flex items-center justify-center rounded-full bg-slate-50/80 p-2 text-slate-700"
          >
            <X className="h-5 w-5" />
          </Link>
          <a
            href={`/photos/${id}`}
            className="absolute bottom-10 right-4 flex items-center justify-center rounded-full bg-slate-50/80 p-2 text-slate-700"
          >
            <CornerRightUp className="h-5 w-5" />
          </a>
        </>
      )}
    </div>
  );
}
