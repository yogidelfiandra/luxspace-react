import Breadcrumb from "components/Breadcrumb";
import ProductDetails from "parts/Details/ProductDetails";
import Suggestion from "parts/Details/Suggestion";
import Footer from "parts/Footer";
import Header from "parts/Header";
import Sitemap from "parts/Sitemap";
import React from "react";

export default function Details() {
  return (
    <>
      <Header theme="black" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/250396", name: "Office Room" },
          { url: "/categories/250396/products/2021", name: "Details" },
        ]}
      />

      <ProductDetails />
      <Suggestion />
      <Sitemap />
      <Footer />
    </>
  );
}
