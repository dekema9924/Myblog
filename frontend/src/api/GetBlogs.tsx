import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Config from "../config/config";
import { getBlogs } from "../features/BlogSlice";
import { RootState } from "../store/Store";

export const useGetBlogs = () => {
    const dispatch = useDispatch();
    const blogs = useSelector((state: RootState) => state.blog.value); // Ensure correct state path

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get(`${Config.ApiUrl}/blogs`);
                dispatch(getBlogs( response.data.result));
            } catch (error) {
                console.error("Error fetching blogs:", error);
            }
        };

        fetchBlogs();
    }, [dispatch]);

    return blogs;
};
