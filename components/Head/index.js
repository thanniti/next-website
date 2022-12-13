import { useContext } from "react";
import NextHead from "next/head";
//import { title as siteTitle } from "../../data/site.json";
//import { description as siteDescription } from "../../data/site.json";
//import { location as siteLocation } from "../../data/site.json";
import Script from 'next/script'
import { createContext } from "react";

const siteTitle = "Thanniti";
const siteDescription = "portfolio, blogs and more..";
const siteLocation = "Thanniti.com";

const PageContext = createContext({});

const Head = () => {
  let { title, description, location, thumbnail } = useContext(PageContext);

  title = [siteTitle, title].filter((e) => e).join(" - ");
  description = description || siteDescription;
  location = location || siteLocation;

  return (
    <NextHead>
      <title>{title}</title>

      {/* metadata */}
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={location} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={location} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />

      <Script src="https://kit.fontawesome.com/ce3601518d.js" crossorigin="anonymous"></Script>

      {/* fonts */}
      <link
        href="https://use.fontawesome.com/releases/v6.1.1/css/all.css"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Cousine:ital,wght@0,400;0,700;1,400;1,700&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
        rel="stylesheet"
      />


    </NextHead>
  );
};

export default Head;
