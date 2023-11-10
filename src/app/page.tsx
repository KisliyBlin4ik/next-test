import Link from 'next/link';
import TagMenu from '@/components/TagMenu';
import Pagination from '@/components/Pagination';
import Sort from '@/components/Sort';

interface IProps {
  searchParams: { [key: string]: string };
  params: { tag: string };
}

async function getData(page: string) {
  const res = await fetch(`https://api.unsplash.com/photos/?page=${page}`, {
    method: 'GET',
    headers: {
      Authorization: 'Client-ID LllFMxkKnxnrOwMUziz5qtfiY4Gbd5XsKGiWgHbBdRo',
    },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home({ searchParams, params }: IProps) {
  const page = searchParams['page'] ?? '1';
  const start = Number(page) - 1;
  const posts = await getData(page);

  return (
    <>
      <div className="page__title">Home page</div>
      <TagMenu />
      <ul className="photo__list">
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`../post/${post.id}`}>
              <img src={post.urls.small} alt={post.alt_description} />
            </Link>
          </li>
        ))}
      </ul>
      <Pagination hasPrevPage={start > 0} hasNextPage />
    </>
  );
}
