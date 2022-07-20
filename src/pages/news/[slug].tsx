import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import { ReactElement } from 'react';
import Layout from '../../components/layouts/Layout';
import Image from 'next/image';

type PropsType = {
  frontmatter: {
    title: string;
    author: string;
    category: string;
    date: string;
    bannerImage: string;
  };
  content: any;
};
// The page for each post
const Post = ({ frontmatter, content }: PropsType) => {
  if (frontmatter && content) {
    const { title, author, category, date, bannerImage } = frontmatter;
    return (
      <div className="px-6 md:px-16 xl:px-80 mt-14 mb-8">
        <div className="flex flex-col space-y-4">
          <div className="bg-green-600 rounded-sm uppercase font-teko text-white text-3xl p-4">
            {title}
          </div>
          <div className="flex flex-col text-gray-800">
            <div className="h-1 bg-green-600 rounded-t-sm"></div>
            <div className="flex flex-col p-4 space-y-1 bg-white">
              <p className="text-gray-500 uppercase font-semibold">
                {category}
              </p>
              <p className="text-2xl font-medium">{title}</p>
              <div className="flex flex-row space-x-2 text-sm items-end">
                <p className="underline">{author}</p>
                <p className="text-xs text-gray-500">{date}</p>
              </div>
            </div>
            <div className="flex w-full">
              <Image
                src={bannerImage}
                alt="post_photo"
                width={1448}
                height={800}
              />
            </div>
            <div
              className="text-lg text-gray-700 mt-8"
              dangerouslySetInnerHTML={{ __html: md().render(content) }}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="animate-pulse flex annimate-bounce min-w-full text-center min-h-screen items-center">
        <p className="font-teko uppercase w-full text-4xl text-gray-700">
          Carregando...
        </p>
      </div>
    );
  }
};

// Generating the paths for each post
export async function getStaticPaths() {
  // Get list of all files from our posts directory
  const files = fs.readdirSync('posts');
  // Generate a path for each one
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }));
  // return list of paths
  return {
    paths,
    fallback: false,
  };
}

type StaticPropsType = {
  params: {
    slug: string;
  };
};

// Generate the static props for the page
export async function getStaticProps({ params: { slug } }: StaticPropsType) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

Post.getLayout = (page: ReactElement) => (
  <Layout title="Notícias" subpages={[{ title: 'Notícias', url: '/news' }]}>
    {page}
  </Layout>
);

export default Post;
