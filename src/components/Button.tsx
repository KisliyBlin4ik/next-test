'use client';

function getUserDataFromLocalStorage(key: string) {
  const data = localStorage.getItem(key);
  return data !== null ? JSON.parse(data) : [];
}

const Button = (post: any) => {
  const addFavorite = () => {
    const userArr = getUserDataFromLocalStorage('user_favorite');

    const isPostExist = userArr.some(
      (userPost: any) => userPost.imageURL.id === post.imageURL.id
    );
    if (!isPostExist) {
      userArr.push(post);
      localStorage.setItem('user_favorite', JSON.stringify(userArr));
    }
  };
  return (
    <button className="text-white" onClick={addFavorite}>
      add to favorite ♥
    </button>
  );
};

export default Button;
