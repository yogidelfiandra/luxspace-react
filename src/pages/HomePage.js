import useModalDOM from "helpers/hooks/useModalDOM";
import useScrollAnchor from "helpers/hooks/useScrollAnchor";
import Clients from "parts/Clients";
import Footer from "parts/Footer";
import Header from "parts/Header";
import BrowseRoom from "parts/HomePage/BrowseRoom";
import Hero from "parts/HomePage/Hero";
import JustArrived from "parts/HomePage/JustArrived";
import Sitemap from "parts/Sitemap";
import React from "react";

export default function HomePage() {
  useScrollAnchor();
  useModalDOM();

  return (
    <>
      <Header theme="white" position="absolute" />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <Sitemap />
      <Footer />
    </>
  );
}
