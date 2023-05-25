const { withContentlayer } = require("next-contentlayer");
 
module.exports = withContentlayer({
  basePath: '',
  experimental: { appDir: true },
});