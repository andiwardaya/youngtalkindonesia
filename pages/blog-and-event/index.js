import React from "react";
import Footer from "../../components/Footer";
import Navbar2 from "../../components/Navbar2";
import { sanityClient } from "../../sanity";

const blogAndEvent = ({ posts }) => {
  console.log(posts);
  return (
    <>
      <Navbar2 />
      <div>
        <h1 className="pt-[7rem]">Main Content</h1>
      </div>
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
