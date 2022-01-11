const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@components": "src/components",
    "@assets": "src/assets",
    "@pages": "src/pages",
    "@services": "src/services",
    "@utils": "src/Utils",
    "@assets": "src/assets",
    "@config": "src/config.js",
    "@app.css": "src/app.css",
    "@Routes": "src/Routes.js",
    "@store": "src/store",
  })(config);

  return config;
};
