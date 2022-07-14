import React, { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { NextRouter } from 'next/router';
import Image from 'next/image';
import Layout from '../../components/layouts/Layout';
import { trpc } from '../../utils/trpc';

const NewsPostPage = () => {
  const router: NextRouter = useRouter();
  const id = router.query.id?.at(0);
  const {
    data: post,
    refetch,
    isLoading,
  } = trpc.useQuery(['news.getNewsPost', { id: parseInt(id!) }]);

  //   return <p>{JSON.stringify(post)}</p>;
  return (
    <div className="px-6 md:px-16 2xl:px-80 mt-14 mb-8">
      <div className="flex flex-col space-y-4">
        <div className="bg-green-600 rounded-sm uppercase font-teko text-white text-3xl p-4">
          Euro 2022
        </div>
        <div className="flex flex-col">
          <div className="h-1 bg-green-600 rounded-t-sm"></div>
          <div className="flex flex-col p-4 space-y-2 bg-white">
            <p className="text-gray-500 uppercase">News</p>
            <p className="text-2xl font-medium">{post?.news_post?.title}</p>
            <div className="flex flex-row space-x-2">
              <p>Pedro Ribeiro</p>
              <p>14 de julho de 2022</p>
            </div>
          </div>
          <div className="flex w-full">
            {post?.news_post && (
              <Image
                src={post.news_post.image}
                alt="post_photo"
                width={1448}
                height={800}
              />
            )}
          </div>
          <p className="text-lg text-gray-700 mt-8">{post?.news_post?.body}</p>
        </div>
      </div>
    </div>
  );
};

NewsPostPage.getLayout = (page: ReactElement) => (
  <Layout title="Notícias" subpages={[{ title: 'Notícias', url: '/news' }]}>
    {page}
  </Layout>
);

export default NewsPostPage;
