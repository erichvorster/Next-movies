import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div>
      <Head>
        <title>DSTV</title>
      </Head>

      {/* Header  */}
      <Header/>
      {/* Navigation */}
      <Nav/>
    </div>
  );
}
