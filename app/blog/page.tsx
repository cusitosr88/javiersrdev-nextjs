import { allPosts, Post } from 'contentlayer/generated'
import { compareDesc } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

function PostCard(post: Post) {
    return (
        <li>
        <div className="block overflow-hidden group rounded-md border-2">
            <Link href={post.url}>
                <Image
                    src={post.img}
                    alt='Post image'
                    width={400}
                    height={150}
                    object-fit="cover"
                    placeholder="blur"
                    blurDataURL="images/no-image.jpg"
                />
            </Link>
        <div className="relative pt-3 px-2">
            <h3
            className="text-lg text-slate-900 font-bold"
            >
                { post.title }
            </h3>
            <div className="mt-2 pb-2">
            <p className="tracking-wider text-gray-900"> { post.description } </p>
            </div>
            <div className="pb-3 pt-3 text-right">
                <Link href={post.url}
                    className="bg-slate-500
                    hover:bg-slate-700
                    text-white font-bold 
                    py-2 px-4 rounded-full"
                >
                    Read more
                </Link>
            </div>
        </div>
        </div>
    </li>
    );
  }

export default function Blog () {
    const posts = allPosts.sort((a, b) =>
        compareDesc(new Date(a.date), new Date(b.date))
    )
    return (
        <div className="bg-white pt-6 pb-6">
            <div className="mx-auto lg:max-w-6xl px-5">
            <h2 className="text-2xl">Take a moment to read, learn and enjoy!</h2>
                <ul className="grid gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        posts.map((post, idx) => {
                            return (
                                <PostCard key={idx} {...post}/>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}