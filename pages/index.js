import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>DSTV</title>
      </Head>

      {/* Header  */}
      <Header/>

    </div>
  );
}
