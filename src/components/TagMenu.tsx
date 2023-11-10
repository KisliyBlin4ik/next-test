import Link from 'next/link';

const TagMenu = () => {
  return (
    <ul className="tag__list">
      <li className="tag__item">
        <Link href={'/tag/nature'}>nature</Link>
      </li>
      <li className="tag__item">
        <Link href={'/tag/cities'}>cities</Link>
      </li>
      <li className="tag__item">
        <Link href={'/tag/portraits'}>portraits</Link>
      </li>
    </ul>
  );
};

export default TagMenu;
