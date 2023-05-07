import type { StaticImageData } from 'next/image';
import Image from 'next/image';

interface PhotoProps {
  photo?: string | StaticImageData;
}

export function Photo({ photo }: PhotoProps) {
  if (!photo) {
    return null;
  }

  return (
    <div className="relative aspect-video w-full">
      <Image src={photo} alt={`one of example photos`} className="object-contain" fill />
    </div>
  );
}
