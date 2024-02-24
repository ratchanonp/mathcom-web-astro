import type { Post } from "@/interfaces/reponse/post.interface";
import { format } from "date-fns";

interface PostCardProps {
    post: Post;
}


function PostCard(props: PostCardProps) {

    const { post } = props;
    const { title, excerpt, date, slug, _embedded } = post;

    return (
        <article className="w-full space-y-3 shadow-lg overflow-hidden">
            <a href={`/posts/${slug}`}>
                <figure className="relative -z-10">
                    {_embedded["wp:featuredmedia"] && _embedded["wp:featuredmedia"][0] ? (
                        <img
                            className="object-center object-cover aspect-[4/3] w-full z-0"
                            src={_embedded["wp:featuredmedia"][0].source_url}
                            alt={_embedded["wp:featuredmedia"][0].alt_text}
                        />
                    ) : (
                        <div
                            className="object-center object-cover aspect-[4/3] w-full z-0 bg-gray-100"
                        />
                    )}
                    <time
                        className="absolute top-2 right-2 px-3 py-1.5 bg-yellow-300 flex flex-col justify-center items-center space-x-0 z-0"
                        dateTime={date}
                    >
                        <span className="font-kanit font-medium text-gray-700 text-xl"
                        >{format(date, "dd")}</span
                        >
                        <span className="font-kanit font-medium text-gray-500 text-sm leading-4"
                        >{format(date, "MMM")}</span
                        >
                    </time>
                </figure>
            </a>
            <div className="space-y-2 p-5">
                <div
                    className="text-sm text-yellow-500 border-[1px] border-yellow-500 px-2 py-0.5 w-fit"
                >
                    {_embedded["wp:term"][0][0].name}
                </div>
                <h3 className="text-xl font-prompt">
                    <a href={`/posts/${slug}`}>{title.rendered}</a>
                </h3>
                <p className="text-gray-500 font-light" dangerouslySetInnerHTML={{ __html: excerpt.rendered }}></p>
            </div>
        </article>
    );
}

export default PostCard;
