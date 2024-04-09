import { QueryProviderHoc } from "src/common/HOC/QueryProviderHoc";
import PostCard from "src/common/components/Post/PostCard";
import type { Post } from "src/interfaces/reponse/post.interface";

import { useQuery } from "@tanstack/react-query";
import { getPosts } from "src/libs/api/post";
import PostCardLoading from "./PostCard.loading";


const PostGrid = () => {

    const {data, isLoading,isPending, isError} = useQuery({
        queryKey: ["posts"],
        queryFn: async () => {
            const response = await getPosts({ _embed: "", per_page: "6" });
            return response;
        }
    });

    if (isPending || isLoading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-4">
                {[...Array(3)].map((_, index) => <PostCardLoading key={index} />)}
            </div>
        );
    }

    if (isError) {
        return <div>Error</div>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-4">
            {data.map((post: Post, idx) => <PostCard key={idx} post={post} />)}
        </div>
    );
};

export default QueryProviderHoc(PostGrid);