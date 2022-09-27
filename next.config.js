/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

// module.exports = {
//   webpack: (config, options) => {
//     config.module.rules.push({
//       test: /\.mdx/,
//       use: [
//         options.defaultLoaders.babel,
//         {
//           loader: '@mdx-js/loader',
//           options: {},
//             devtool: false,
//         },
//       ],
//     })

//     return config
//   },
// }

module.exports = {
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack, babel }
  ) => {
    // Important: return the modified config
    return config
  },
}

// module.exports = {
// config.module.rules.push(
//   {
//     test: /\.s(a|c)ss$/,
//     use: ['babel-loader',
//       { loader: 'sass-loader' },
//     ],
//   },
// )};



