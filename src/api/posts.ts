import type { Photo, Post } from '../types';
import axiosInstance from './axiosInstance';

export const fetchPosts = async (limit = 12): Promise<Post[]> => {
    const { data } = await axiosInstance.get<Post[]>('/posts', {
        params: { _limit: limit },
    });
    return data;
};

export const fetchPhotos = async (limit = 12): Promise<Photo[]> => {
    const { data } = await axiosInstance.get<Photo[]>('/photos', {
        params: { _limit: limit },
    });
    return data;
};
