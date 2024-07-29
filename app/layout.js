'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noodp,noydir" />
        <meta name="robots" content="index,follow" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="article:publisher" content="2024-07-26T16:04:35+00:00" />
        <title>i11Labs | Powered by intelligence</title>
        <meta name="title" content="i11Labs | Powered by intelligence" />
        <meta name="description" content="i11Labs, a pioneer in AI integration, application modernization and custom software development, transforms businesses with innovative technology solutions. Explore how we drive change through intelligence. Discover more." />
        <meta property="og:title" content="i11Labs | Powered by intelligence" />
        <meta property="og:description" content="i11Labs, a pioneer in AI integration, application modernization and custom software development, transforms businesses with innovative technology solutions. Explore how we drive change through intelligence. Discover more." />
        <meta property="og:url" content="https://i11labs.com/" />
        <meta property="og:image" content="https://dev.i11labs.com/thumbnail.jpg" />
        <meta property="twitter:image" content="https://dev.i11labs.com/thumbnail.jpg" />
        
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></script>
      </head>

      <body className={inter.className}>
        {loading ? (
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <div style={{ backgroundColor: "#FFFFFF", width: "100%" }}></div>
              </div>
            </div>
          </div>
        ) : (
          children
        )}
      </body>
      <GoogleAnalytics gaId="G-F08M9KWEE3" />
    </html>
  );
}
