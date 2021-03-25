module.exports = function (source) {
  console.info('loader2');

  console.info('opts', this.getOptions());

  console.info('loader2\n\n\n\n');
  return `export default ${source}`;
}