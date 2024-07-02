import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from "./counter/counterSlice.ts";
import { pokemonApi } from "./pokemon/pokemon.ts";
import { setupListeners } from "@reduxjs/toolkit/query";
import { postsApi } from "@/store/posts/posts.api.ts";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		[pokemonApi.reducerPath]: pokemonApi.reducer,
		[postsApi.reducerPath]: postsApi.reducer,
	},
	// and other useful features of `rtk-query`.
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(pokemonApi.middleware , postsApi.middleware),
})

setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch