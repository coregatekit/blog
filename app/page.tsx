import fs from "fs";
import Link from "next/link";

const getPostMetadata = () => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const slugs = markdownPosts.map((file) => file.replace(".md", ""));
  return slugs;
};

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((slug) => (
    <div>
      <Link href={`/posts/${slug}`}>
        <h3>{slug}</h3>
      </Link>
    </div>
  ));

  return <h1>{postPreviews}</h1>;
};

export default HomePage;
