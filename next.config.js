/** @type {import('next').NextConfig} */
const nextConfig = {
    // basePath:"/i11labs2024",
    output: 'export',
    reactStrictMode: false,
    trailingSlash: true,
     images: {
         unoptimized: true
    //     remotePatterns:[
    //         {
    //             protocol: 'http',
    //             hostname:'localhost',
    //             // port:'1337'
    //         },
    //     ],
    },
}
 
module.exports = nextConfig
