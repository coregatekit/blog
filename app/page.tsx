import Link from "next/link";

import getPostMetadata from '@/components/getPostMetadata';

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <div>
      <Link href={`/posts/${post.slug}`}>
        <h2>{post.title}</h2>
      </Link>
      <p>{post.subtitle}</p>
      <p>{post.date}</p>
    </div>
  ));

  return <h1>{postPreviews}</h1>;
};

export default HomePage;
