import { photos } from '@/assets/photos';
import { Photo } from '@/components/photo';

type PageParams = {
  id: string;
};

export async function generateStaticParams(): Promise<PageParams[]> {
  return photos.map((photo) => ({ id: photo.id }));
}

type PageProps = {
  params: PageParams;
};

function PhotoPage({ params }: PageProps) {
  const photo = photos.find((photo) => photo.id === params.id);

  return <Photo photo={photo?.photo} />;
}

export default PhotoPage;
