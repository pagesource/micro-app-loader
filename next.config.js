module.exports = {
  reactStrictMode: true,
  webpack: (config, options) => {
    const { ModuleFederationPlugin } = options.webpack.container;
    config.plugins.push(
      new ModuleFederationPlugin({
        remotes: {
          // example: microapp: "microapp@http://localhost:5000/home/dist/remoteEntry.js",
        },
        shared: [],
      })
    );

    return config;
  },
}
