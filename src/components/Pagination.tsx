'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import '../styles/Pagination.modal.css';

interface IPagination {
  hasPrevPage: boolean;
  hasNextPage: boolean;
}

const Pagination = ({ hasPrevPage, hasNextPage }: IPagination) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get('page') ?? 1;

  // const per_page = searchParams.get('per_page') ?? 10;

  return (
    <div className="pagination">
      <button
        className="pagination__btn"
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`?page=${Number(page) - 1}`);
        }}
      >
        prev page
      </button>

      <div>{page}</div>

      <button
        className="pagination__btn"
        // disabled={!hasNextPage}
        onClick={() => {
          router.push(`?page=${Number(page) + 1}`);
        }}
      >
        next page
      </button>
    </div>
  );
};

export default Pagination;
