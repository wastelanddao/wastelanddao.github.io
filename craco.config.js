const CracoLessPlugin = require("craco-less");

module.exports = {
  babel: {
    plugins: [
      [
        "import",
        {
          libraryName: "antd",
          libraryDirectory: "es",
          style: true,
        },
      ],
    ],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            // modifyVars: { '@brand-primary': '#1DA57A' },建议主题色在less中更改比较方便
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
