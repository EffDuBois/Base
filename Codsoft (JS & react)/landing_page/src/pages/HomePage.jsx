import React from "react";
import NavBar from "../components/sections/NavBar";
import Carousel from "../components/sections/Carousel";
import Card from "../components/cards/card";
import Services from "../components/sections/Services";
import AwardBanner from "../components/sections/AwardBanner";
import Footer from "../components/sections/Footer";

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <Carousel />
      <AwardBanner />
      <Card />
      <Services />
      <Footer />
    </div>
  );
}
