const rootDir = './dist';
const srcDir = './src' 
const config = {
  rootDir,
  srcDir: {
    html: `${srcDir}/html`,
    image: `${srcDir}/images`,
    css: `${srcDir}/scss`,
  },
  destDir: {
    html: rootDir,
    image: `${rootDir}/assets/images`,
    css: `${rootDir}/assets/css`,
  }
};

module.exports = config;