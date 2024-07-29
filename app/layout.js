import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { GoogleAnalytics } from '@next/third-parties/google'
import Header from "../components/Header/index";
import Footer from "../components/Footer/index";
import Scroll from "../components/scroll-to-top/index";

// import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "i11Labs | Powered by intelligence",
  description: "i11Labs, a pioneer in AI integration, application modernization and custom software development, transforms businesses with innovative technology solutions. Explore how we drive change through intelligence. Discover more.",
  ogTitle: "i11Labs | Powered by intelligence",
  url: "https://i11labs.com/",
  ogDescription: "i11Labs, a pioneer in AI integration, application modernization and custom software development, transforms businesses with innovative technology solutions. Explore how we drive change through intelligence. Discover more.",
  ogUrl: "https://i11labs.com/",
  ogType: "website",
  ogLocale: "en_US",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noodp,noydir" />
        <meta name="robots" content="index,follow" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="article:publisher" content="2024-07-27T08:17:32+00:00" />
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <meta property="og:image" content="https://dev.i11labs.com/i11labs2024/thumbnail.jpg" />
        <meta property="twitter:image" content="https://dev.i11labs.com/i11labs2024/thumbnail.jpg" />
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></script>
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Scroll />
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-F08M9KWEE3" />
    </html>
  );
}
