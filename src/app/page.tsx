"use client";

import Signature from "../components/Signature";
import { useGlobalContext } from '../context/GlobalContext';
import Carousel from "../components/Carousel";
import Menu from "../components/Menu";
import MenuIcon from "../components/MenuIcon";

export default function Home() {
  //const assetPrefix = process.env.NODE_ENV === 'production' ? '/Photography_Portfolio_2025' : '';
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
