const rootDir = './dist';
const srcDir = './src' 
const config = {
  rootDir,
  srcDir: {
    html: `${srcDir}/html`,
    image: `${srcDir}/images`,
  },
  destDir: {
    html: rootDir,
    image: `${rootDir}/assets/images`,
  }
};

module.exports = config;