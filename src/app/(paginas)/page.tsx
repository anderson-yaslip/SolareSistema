import Banner from "@/components/Home/Banner";
import First from "@/components/Home/First";
import Five from "@/components/Home/Five";
import Four from "@/components/Home/Four";
import Sobre from "@/components/Home/Second";
import Three from "@/components/Home/Three";
import "@/styles/index.scss";

export default function Home() {
  return (
    <>
      <Banner />
      <First />
      <Sobre />
      <Three />
      <Four />
      <Five />
    </>
  );
}
