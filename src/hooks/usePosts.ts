import { useQuery } from '@tanstack/react-query';
import { fetchPosts, fetchPhotos } from '../api/posts';
import type { ShowcaseItem } from '../types';

export const useShowcaseItems = (count = 12) => {
    return useQuery<ShowcaseItem[], Error>({
        queryKey: ['showcase', count],
        queryFn: async () => {
            const [posts, photos] = await Promise.all([
                fetchPosts(count),
                fetchPhotos(count),
            ]);

            return posts.map((post, i) => ({
                id: post.id,
                title: post.title,
                body: post.body,
                image: photos[i]?.url ?? `https://via.placeholder.com/600x400?text=${post.id}`,
            }));
        },
        staleTime: 1000 * 60 * 2,
        gcTime: 1000 * 60 * 10,
    });
};
