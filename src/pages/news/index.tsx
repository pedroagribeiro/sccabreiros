import React, { ReactElement, useState } from 'react';
import Layout from '../../components/layouts/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { trpc } from '../../utils/trpc';
import { GoDash, GoPlus } from 'react-icons/go';

const News = () => {
  const { data: news, refetch, isLoading } = trpc.useQuery(['news.getAllNews']);

  const [dropdownsStatus, setDropdownsStatus] = useState(new Map([]));

  const updateDropdownStatus = (month_year: string) => {
    if (dropdownsStatus.has(month_year)) {
      const new_state = new Map(dropdownsStatus);
      const prev_value = dropdownsStatus.get(month_year);
      new_state.set(month_year, !prev_value);
      setDropdownsStatus(new_state);
    } else {
      const new_state = new Map(dropdownsStatus);
      new_state.set(month_year, false);
      setDropdownsStatus(new_state);
    }
  };

  const isItLoading = () => {
    const r = isLoading ? 'animate-bounce' : 'hidden';
    return r;
  };

  return (
    <div className="px-6 md:px-16 2xl:px-64 mt-8 mb-8">
      <div className="flex flex-col">
        <div
          className={`animate-pulse flex ${isItLoading()} min-w-full text-center min-h-screen items-center`}
        >
          <p className="font-teko uppercase w-full font-agencygothic text-4xl text-gray-700">
            Carregando...
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          {news?.news.map((month_year_news_posts) => (
            <span key={month_year_news_posts[0] as string}>
              <button
                className="w-full flex justify-between px-10 py-6 items-center text-gray-700 hover:text-green-600 text-2xl font-agencygothic"
                onClick={() =>
                  updateDropdownStatus(month_year_news_posts[0] as string)
                }
              >
                <p className="uppercase font-teko text-4xl">
                  {month_year_news_posts[0]}
                </p>
                <GoDash
                  className={`${
                    dropdownsStatus.get(month_year_news_posts[0]) === false
                      ? 'hidden'
                      : 'block'
                  }`}
                />
                <GoPlus
                  className={`${
                    dropdownsStatus.get(month_year_news_posts[0]) === false
                      ? 'block'
                      : 'hidden'
                  }`}
                />
              </button>
              <div
                className={`flex flex-col space-y-6 px-2 md:px-10 mb-6 ${
                  dropdownsStatus.get(month_year_news_posts[0]) === false
                    ? 'hidden'
                    : 'block'
                }`}
              >
                {month_year_news_posts[1].map((news_post, index) => (
                  <Link
                    key={news_post.id}
                    href={{
                      pathname: '/news/[id]',
                      query: { id: news_post.id },
                    }}
                  >
                    <button>
                      <div className="w-full flex button opacity-100 hover:opacity-70 transition duration-300 ease-in-out bg-green-600">
                        <div className="w-2/5 md:w-1/5 hidden lg:flex">
                          <Image
                            src={news_post.image}
                            alt="interview_telmo"
                            width={1448}
                            height={800}
                          />
                        </div>
                        <div className="w-full lg:w-4/5 flex flex-col space-y-2 bg-white px-8 py-auto justify-center rounded-r-sm">
                          <span className="flex flex-col space-2-4 w-full items-start py-4 lg:py-0">
                            <p className="uppercase font-bold text-gray-400">
                              Notícias
                            </p>
                            <p className="text-gray-700 text-sm lg:text-2xl font-normal">
                              {news_post.title}
                            </p>
                          </span>
                        </div>
                      </div>
                    </button>
                  </Link>
                ))}
              </div>
            </span>
          ))}
        </div>
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
