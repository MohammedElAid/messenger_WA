const { Domain } = require('domain')

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {

        swcPlugins: [
            ["next-superjson-plugin", {}]
        ]
    },
    images: {
        domains:
            [
                "res.cloudinary.com",
                "avaters.githubusercontent.com",
                "lh3.googleusercontent.com"
            ]
    }


}


module.exports = nextConfig
