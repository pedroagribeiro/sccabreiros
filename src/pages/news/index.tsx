import React, { useState } from 'react';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import { ReactElement } from 'react';
import Layout from '../../components/layouts/Layout';
import Image from 'next/image';
import { GoDash, GoPlus } from 'react-icons/go';
import { GiJasmine } from 'react-icons/gi';

type Post = {
  slug: string;
  frontmatter: {
    id: number;
    title: string;
    author: string;
    category: string;
    date: string;
    monthyear: string;
    bannerImage: string;
  };
};

type ArrayElem = 'string' | Array<Post>;

type PropsType = {
  posts: Array<Array<ArrayElem>>;
};

const Blog = ({ posts }: PropsType) => {
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
    const r = posts ? 'hidden' : 'animate-bounce';
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
          {posts &&
            posts.map((month_year_news_posts) => (
              <span key={month_year_news_posts[0] as string}>
                <button
                  className="w-full flex justify-between px-10 py-6 items-center text-gray-700 hover:text-green-600 text-2xl font-agencygothic"
                  onClick={() =>
                    updateDropdownStatus(month_year_news_posts[0] as string)
                  }
                >
                  <p className="uppercase font-teko text-4xl">
                    {month_year_news_posts[0] as string}
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
                  {(month_year_news_posts[1] as Array<Post>).map(
                    (news_post, index) => (
                      <Link
                        key={news_post.frontmatter.id}
                        href={{
                          pathname: `/news/${news_post.slug}`,
                        }}
                      >
                        <button>
                          <div className="w-full flex flex-col lg:flex-row button opacity-100 hover:opacity-70 transition duration-300 ease-in-out">
                            <div className="w-full md:w-1/5 flex">
                              <Image
                                src={news_post.frontmatter.bannerImage}
                                alt="interview_telmo"
                                width={1448}
                                height={800}
                                className="rounded-none"
                              />
                            </div>
                            <div className="w-full lg:w-4/5 flex flex-col space-y-2 bg-white px-4 lg:px-8 py-auto justify-center rounded-r-sm">
                              <div className="flex w-full flex-col space-y-2 items-start py-4 lg:py-0">
                                <p className="uppercase font-bold text-gray-400">
                                  {news_post.frontmatter.category}
                                </p>
                                <p className="text-gray-700 text-md lg:text-2xl">
                                  {news_post.frontmatter.title}
                                </p>
                              </div>
                            </div>
                          </div>
                        </button>
                      </Link>
                    ),
                  )}
                </div>
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  // get list of files from the posts folder
  const files = fs.readdirSync('posts');

  // get frontmatter & slug from each post
  const initial_posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  const monthyears = [] as Array<string>;
  initial_posts
    .sort((post) => post.frontmatter.id)
    .forEach((post) => {
      if (!monthyears.includes(post.frontmatter.monthyear)) {
        monthyears.push(post.frontmatter.monthyear);
      }
    });

  const newPosts = new Map() as Map<String, any[]>;
  monthyears.forEach((monthyear) => {
    newPosts.set(monthyear, []);
  });
  initial_posts
    .sort((post) => post.frontmatter.id)
    .forEach((post) => {
      newPosts.get(post.frontmatter.monthyear)?.push(post);
    });

  const posts = Array.from(newPosts);

  return {
    props: {
      posts,
    },
  };
}

Blog.getLayout = (page: ReactElement) => {
  return (
    <Layout
      title="Notícias"
      description="Consulta as últimas notícias que dizem respeito ao nosso clube"
      subpages={[{ title: 'Notícias', url: '/news' }]}
    >
      {page}
    </Layout>
  );
};

export default Blog;
