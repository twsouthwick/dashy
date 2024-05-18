module.exports = {
  entry: './server.js', // Entry point of your application
  output: {
    path: `${__dirname}/dist`, // Output directory
    filename: 'server.js', // Output bundle file
  },
  target: 'node',
};
