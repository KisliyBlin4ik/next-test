'use client';

import Link from 'next/link';

function getUserDataFromLocalStorage(key: string) {
  const data = localStorage.getItem(key);
  return data !== null ? JSON.parse(data) : [];
}

export default function Favorites() {
  const userArr = getUserDataFromLocalStorage('user_favorite');

  return (
    <>
      <ul className="photo__list">
        {userArr.map((post: any) => (
          <li>
            <Link href={`../post/${post.imageURL.id}`}>
              <img
                src={post.imageURL.urls.small}
                alt={post.imageURL.alt_description}
              />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
