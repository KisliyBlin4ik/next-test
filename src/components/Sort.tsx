'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import '../styles/Sort.modal.css';

const Sort = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const order_by = searchParams.get('order_by') ?? 'relevant';

  return (
    <select
      name="sort"
      id="sort"
      onChange={(event) => {
        router.push(`?order_by=${event.target.value}`);
      }}
      value={order_by}
    >
      <option value="relevant">relevant</option>
      <option value="latest">latest</option>
    </select>
  );
};

export default Sort;
