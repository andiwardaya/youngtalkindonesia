import React from "react";
import Head from "next/head";
import Footer from "../../components/Footer";
import Navbar2 from "../../components/Navbar2";
import { sanityClient } from "../../sanity";
import { urlFor } from "../../sanity";
import Link from "next/link";

const blogAndEvent = ({ posts }) => {
  console.log(posts);
  return (
    <>
      <Head>
        <title>Youngtalk Indonesia Blog & Event</title>
        <meta name="description" content="Youngtalk Indonesia Blog & Event" />
        <link rel="icon" href="/yti_merah.png" />
      </Head>
      <Navbar2 />
      <main className="max-w-6xl mx-auto grid  py-[6rem]">
        <h1 className="text-center text-4xl font-bold text-blue-500 mb-8">
          Agency Blog Page
        </h1>
        <div className="grid grid-cols-1  p-6 sm:grid-cols-2  lg:grid-cols-3 gap-6  md:grid-cols-3 md:gap-10 md:p-6">
          {posts.map((post) => (
            <Link key={post._id} href={`/blog/${post.slug.current}`}>
              <div className="group cursor-pointer  border border-gray-300  rounded-lg overflow-hidden hover:shadow-xl h-auto]">
                <img
                  className=" h-[10rem] w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                  src={urlFor(post.mainImage).url()}
                  alt="blogMainImage"
                />
                <div className="px-5 py-5 bg-white ">
                  <h1 className="font-bold uppercase text-md">{post.title}</h1>
                  <p className="text-gray-400 mb-5 md:text-sm">
                    {" "}
                    {post.description}
                  </p>
                  <div className="flex  items-center  justify-start  space-x-5">
                    <img
                      className="w-12 h-12 rounded-lg"
                      src={urlFor(post.author.image).url()}
                      alt="authorImage"
                    />
                    <p className="text-sm">by {post.author.name}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default blogAndEvent;

export async function getServerSideProps() {
  const query = `*[_type == "post"]{
    _id,
    title,
    description,
    author -> {
    name, 
    image
} ,
    categories[]->{
      title
    },
    slug,
    mainImage,
    publishedAt
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: { posts }, // will be passed to the page component as props
  };
}
