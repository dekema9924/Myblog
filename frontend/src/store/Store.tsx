// continue with redux
import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/UserSlice'
import blogReducer from '../features/BlogSlice'


const store = configureStore({
  reducer: {
    user: userReducer,
    blog: blogReducer
  }
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch