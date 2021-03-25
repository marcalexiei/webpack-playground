module.exports = function (source) {
  console.info('loader1');

  console.info(this.getOptions());

  console.info('loader1\n\n\n\n');
  return `export default ${JSON.stringify(this.getOptions())};`;
}