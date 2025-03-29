
import { createSlice } from "@reduxjs/toolkit";
import { initialBlog } from "../components/Hero";


export const BlogSlice = createSlice({
    name: 'blogs',
    initialState: {
        value: initialBlog
    },
    reducers: {
        getBlogs: (state, action) => {
            state.value = action.payload
        }
    }
})



export const {getBlogs} = BlogSlice.actions
export default BlogSlice.reducer