const rootDir = './dist';
const srcDir = './src' 
const config = {
  rootDir,
  srcDir: {
    html: `${srcDir}/html`,
    image: `${srcDir}/images`,
    css: `${srcDir}/scss`,
    script: `${srcDir}/script/`
  },
  destDir: {
    html: rootDir,
    image: `${rootDir}/assets/images`,
    css: `${rootDir}/assets/css`,
    script: `${rootDir}/assets/script`,
  }
};

module.exports = config;