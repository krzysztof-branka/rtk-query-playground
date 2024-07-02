import { postsApi } from "@/store/posts/posts.api.ts";
import { Post } from "@/types/posts.ts";
import { useState } from "react";

const Posts = () => {
	const [page, setPage] = useState(1);
	const { data, isLoading, refetch, isFetching, status } = postsApi.useGetPostsQuery(page);

	console.log(status);

	return (
		<>
			<button onClick={() => refetch()}>Refetch</button>
			<div>
				{ !isLoading && isFetching && <p>...</p> }
				{ isLoading && <p>Loading...</p> }
				{ data?.map((post: Post) => (
					<div key={post.id}>
						<h1>{post.title}</h1>
						<p>{post.id}</p>
						<p>{post.content}</p>
						<p>{post.author}</p>
						<p>{post.date}</p>
					</div>
				)) }
			</div>
			<button onClick={() => setPage((prev) => prev - 1)}>Prev Page</button>
			<div>Page: {page}</div>
			<button onClick={() => setPage((prev) => prev + 1)}>Next Page</button>
		</>
	);
};

export default Posts;