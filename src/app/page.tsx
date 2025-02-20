"use client";

import Carousel from "../components/Carousel";
import Menu from "../components/Menu";
import MenuIcon from "../components/MenuIcon";
import Signature from "../components/Signature";

export default function Home() {
  return (
    <main className="app">
      <Carousel />
      <Signature />
      <Menu />
      <MenuIcon />
    </main>
  );
}
