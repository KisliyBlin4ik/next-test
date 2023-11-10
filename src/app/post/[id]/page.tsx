import Button from '@/components/Button';
import { Metadata } from 'next';

type Props = {
  params: {
    id: string;
  };
};

export function generateMetadata({
  params,
}: {
  params: { tag: string };
}): Metadata {
  return {
    title: 'POST',
  };
}

async function getData(id: string) {
  const res = await fetch(
    `https://api.unsplash.com/photos/${id}`, {
      method: 'GET',
      headers: {
          'Authorization': 'Client-ID LllFMxkKnxnrOwMUziz5qtfiY4Gbd5XsKGiWgHbBdRo'
      }
  }
  );
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Post({ params: { id } }: Props) {
  const posts = await getData(id);

  return (
    <>
      <div className='page__title'>Post page: {posts.alt_description}</div>
      {posts.urls && (
        <img src={posts.urls.small} alt={posts.alt_description} />
      )}
      <Button imageURL={posts}/>
    </>
  );
}
