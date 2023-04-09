import Head from "next/head";
import Image from "next/image";
import {
  MicrophoneIcon,
  SearchIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import Avatar from "../components/Avatar";
import Footer from "../components/Footer";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Card from "../components/Card";
import Brands from "../components/Brands";
import Codes from "../components/Codes";

const cats = [
  {
    brand: {
      id: 9,
      name: "?????",
      logo: "",
    },
    data: [
      {
        id: 180,
        name: "???? ???? ????",
        slug: "dsth-bnd-tst",
        details:
          "Cerebral suspenser is a kidney combining the suspenser and cerebral fabrication stripes. It's generally used to describe literature or flicks that deal with cerebral narratives in a suspenser or thrilling setting.\nIn terms of environment and convention, it's a subgenre of the broader ranging suspenser narrative structure, with parallels to Gothic and operative fabrication in the sense of occasionally having a\" dissolving sense of reality\". It's frequently told through the standpoint of psychologically stressed characters, revealing their distorted internal comprehensions and fastening on the complex and frequently tortured connections between compulsive and pathological characters Cerebral suspensers frequently incorporate rudiments of riddle, drama, action, and paranoia. The kidney is nearly related to and occasionally overlaps with the cerebral horror kidney, the ultimate generally involving further horror and terror rudiments and themes and further disturbing or shocking scripts.",
        type_id: 9,
        image:
          "https://pickbazarlaravel.s3.ap-southeast-1.amazonaws.com/1384/Thriller.png",
        link: "http://185.110.190.86/cats/dsth-bnd-tst",
      },
    ],
  },
];

export default function Home({ result }) {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const [brand, setBrand] = useState([]);

  const [data, setData] = useState([]);
  async function search(e) {
    e.preventDefault();
    try {
      const response = await fetch("http://185.110.190.86:8000/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ search: searchInputRef.current.value }),
      });

      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
    // const term = searchInputRef.current.value;
    // if (!term) return;

    // router.push(`/search?term=${term}`);
  }
  const getBrands = async () => {
    try {
      const data = await fetch(
        `http://185.110.190.86:8000/api/search/brands`
      ).then((response) => response.json());
      setBrand(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBrands();
  }, []);
  return (
    <>
      <div className="flex flex-col items-center justify-between min-h-screen dark:bg-primary-dark dark:text-white group">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="description" content="description of your project" />
          <meta name="theme-color" content="#000" />
          <title>Pargaran</title>
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="pargaran" href="/logoD.png"></link>
        </Head>
        {/* Header */}
        <header className="flex w-full items-center justify-between p-5 text-sm text-gray-700 dark:text-gray-300 md:font-medium">
          {/* Left */}
          <div className="flex space-x-4 items-center">
            <a className="link">درباره ما</a>
            <a className="link">تماس با ما</a>
          </div>
          {/* Right */}
          <div className="flex space-x-4 items-center">
            <ViewGridIcon className="h-10 w-10 p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-[#111] rounded-full" />
          </div>
        </header>
        {/* Body */}
        <form className="flex h-96 flex-col items-center justify-center flex-grow w-[80%] sm:w-[90%]">
          <Image
            src="/image/logoD.jpg"
            className="w-225 md:w-300 md:h-100"
            width={225}
            height={75}
            alt=""
          />

          <div className="flex w-full mt-5 hover:shadow focus-within:shadow  max-w-md rounded-full border border-gray-500 md:hover:border-white dark:bg-gray-700md:dark:hover:border-gray-100 px-5 py-2 sm:py-3 items-center sm:max-w-xl lg:max-w-2xl">
            <button type="submit" onClick={search}>
              {" "}
              <SearchIcon className="h-5 mr-3 text-gray-500 " />
            </button>

            <input
              ref={searchInputRef}
              type="text"
              className="focus:outline-none w-full flex-grow dark:bg-primary-dark custom-input"
            />
          </div>

          <div className="flex flex-row space-y-0 w-[90%] justify-center mt-8 space-x-3 sm:space-x-4">
            <Brands data={brand} />
            {/* <button type="submit" onClick={search} className="btn">
              Google Search
            </button>
            <button onClick={search} className="btn">
              I&apos;m Feeling Lucky
            </button> */}
          </div>
        </form>
        {data?.products?.map((item, index) => (
          <>
            <h1>محصولات</h1>
            <Card key={index} brand={item.brand} items={item.data} />
          </>
        ))}{" "}
        {data?.codes && <h1>سرمحصولات</h1>}
        {data?.codes?.map((item, index) => (
          <>
            <Codes key={index} brand={item.brand} data={item.data} />
          </>
        ))}
        {/* <Card data={cats} /> */}
        {/* <Footer className=" group-even:focus:invisible" /> */}
      </div>

      <div id="portal"></div>
    </>
  );
}

export async function getServerSideProps() {
  const data = await fetch(`http://185.110.190.86:8000/api/search/brands`).then(
    (response) => response.json()
  );

  return {
    props: {
      results: data,
    },
  };
}
