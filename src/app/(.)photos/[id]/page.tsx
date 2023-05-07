import { photos } from '@/assets/photos';
import Modal from '@/components/modal';
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

function ModalPhotoPage({ params }: PageProps) {
  const photo = photos.find((photo) => photo.id === params.id);

  return (
    <Modal>
      <Photo photo={photo?.photo} />
    </Modal>
  );
}

export default ModalPhotoPage;
