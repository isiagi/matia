// import { Inter } from "next/font/google";
import { Montserrat, Roboto_Serif } from "next/font/google";
import "./globals.css";
import TopBanner from "./components/topBanner/TopBanner";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";

import "../styles/globals.scss";

const inter = Roboto_Serif({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "ST MATIA MULUMBA PARISH",
  description: "ST MATIA MULUMBA PARISH",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopBanner />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
