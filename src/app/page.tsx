"use client";

import Carousel from "../components/Carousel";
import Menu from "../components/Menu";
import MenuIcon from "../components/MenuIcon";
import Signature from "../components/Signature";
import { useGlobalContext } from '../context/GlobalContext';

export default function Home() {
  const { menuVisible } = useGlobalContext();

  return (
    <main className="app">
      <Carousel />
      <Signature />
      {menuVisible && <Menu />}
      <MenuIcon />
    </main>
  );
}
