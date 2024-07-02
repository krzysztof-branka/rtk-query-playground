import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post } from "@/types/posts.ts";

export const postsApi = createApi({
	reducerPath: "postsApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:3000/"
	}),
	endpoints: (builder) => ({
		getPosts: builder.query<Post[], number>({
			query: (page = 1) => `posts?_page=${page}&_limit=3`,
		})
	})
});