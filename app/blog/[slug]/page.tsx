import { allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import { format, parseISO } from "date-fns";

export const generateStaticParams = async () =>
  allPosts.map((post:any) => ({ slug: post._raw.flattenedPath }));
export const generateMetadata = ({ params }: any) => {
  const post = allPosts.find(
    (post: any) => post._raw.flattenedPath === params.slug
  );
  return { title: post?.title, description: post?.description };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  let MDXContent;

  if (!post) {
    return <div>404</div>;
  } else {
    MDXContent = getMDXComponent(post!.body.code);
  }

  return (
    <article className="bg-white pt-5 pb-5 text-slate-900">
        <div className="mx-auto lg:max-w-4xl px-5 lg:text-lg prose">
        <h1 >{post.title}</h1>
        <p className="pb-1">{format(parseISO(post.date), "LLLL d, yyyy")}</p>
            <MDXContent className="mt-2" />
        </div>
    </article>
  )
};

export default PostLayout;