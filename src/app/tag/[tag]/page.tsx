import Pagination from '@/components/Pagination';
import Sort from '@/components/Sort';
import TagMenu from '@/components/TagMenu';
import { Metadata } from 'next';
import Link from 'next/link';

interface IProps {
  searchParams: { [key: string]: string };
  params: { tag: string };
}

export function generateMetadata({
  params,
}: {
  params: { tag: string };
}): Metadata {
  return {
    title: params.tag.toUpperCase(),
  };
}

async function getData(slug: string, page: string, order_by: string) {
  const response = await fetch(
    `https://api.unsplash.com/search/photos/?query=${slug}&page=${page}${order_by === 'latest' ? `&order_by=${order_by}` : null}`,
    {
      method: 'GET',
      headers: {
        Authorization: 'Client-ID LllFMxkKnxnrOwMUziz5qtfiY4Gbd5XsKGiWgHbBdRo',
      },
    }
  );
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await response.json();
  const results = data.results;

  return results;
}
export default async function Posts({ searchParams, params }: IProps) {
  const page = searchParams['page'] ?? '1';
  const order_by = searchParams['order_by'] ?? 'relevant';
  const start = Number(page) - 1;

  const posts = await getData(params.tag, page, order_by);

  return (
    <>
      <div className='page__title'>Selected tag: {params.tag.toUpperCase()}</div>
      <div className='flex justify-between items-center mb-2.5'>
        <TagMenu />
        <Sort />
      </div>
      <ul className='photo__list'>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`../post/${post.id}`}>
              {<img src={post.urls.small} alt={post.description} />}
            </Link>
          </li>
        ))}
      </ul>
      <Pagination hasPrevPage={start > 0} hasNextPage />
    </>
  );
}
