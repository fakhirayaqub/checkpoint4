import React from "react";
import Header from "./Header";
import Work from "./Work";
import Clients from "./Clients";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import BackToTop from "./BackToTop";

export default function HomePage() {
  return (
    <div>
      <Header />
      <main role="main">
        <Work />
        <Clients />
        <About />
      </main>
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}
