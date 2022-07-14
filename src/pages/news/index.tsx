import React, { ReactElement } from 'react';
import Layout from '../../components/layouts/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { trpc } from '../../utils/trpc';

const News = () => {
  const { data: news, refetch, isLoading } = trpc.useQuery(['news.getAllNews']);

  return (
    <div className="px-6 md:px-16 2xl:px-64 mt-8 mb-8">
      <div className="flex flex-col space-y-4">
        {news?.news.map((news_post) => (
          <Link
            key={news_post.id}
            href={{ pathname: '/news/[id]', query: { id: news_post.id } }}
          >
            <button>
              <div className="w-full flex button shadow-md">
                <div className="flex w-2/5 md:w-1/5 opacity-100 hover:opacity-50 transition duration-300 ease-in-out bg-green-600 rounded-l-sm ">
                  <Image
                    src={news_post.image}
                    alt="interview_telmo"
                    width={1448}
                    height={800}
                  />
                </div>
                <div className="w-4/5 flex flex-col space-y-2 bg-white px-8 py-auto justify-center rounded-r-sm">
                  <span className="flex flex-col space-2-4 w-full items-start">
                    <p className="uppercase font-bold text-gray-400">News</p>
                    <p className="text-gray-700 text-md lg:text-2xl font-normal">
                      {news_post.title}
                    </p>
                  </span>
                </div>
              </div>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

News.getLayout = (page: ReactElement) => (
  <Layout title="Notícias" subpages={[{ title: 'Notícias', url: '/news' }]}>
    {page}
  </Layout>
);

export default News;
