import Image from 'next/image';
import Link from 'next/link';

import { photos } from '@/assets/photos';

export default function HomePage() {
  return (
    <ul className="flex flex-col items-center gap-4 md:flex-row">
      {photos.map((photo) => (
        <li key={photo.id} className="h-[180px] w-full md:h-[380px] md:flex-1">
          <Link className="relative block h-full w-full" href={`/photos/${photo.id}`}>
            <Image
              src={photo.photo}
              alt={`one of example photos`}
              className="h-full w-full object-cover"
              fill
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
