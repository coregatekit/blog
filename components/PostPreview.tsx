import Link from 'next/link';
import { PostMetadata } from './PostMetadata';

const PostPreview = (props: PostMetadata) => {
  return (
    <div className='border border-slate-300 p-4 rounded-md shadow-md bg-white'>
      <Link href={`/posts/${props.slug}`}>
        <h2 className='font-bold text-blue-600 hover:underline'>{props.title}</h2>
      </Link>
      <p className='text-sm text-slate-400 mb-2'>{props.date}</p>
      <p className='text-slate-700'>{props.subtitle}</p>
    </div>
  );
};

export default PostPreview;
