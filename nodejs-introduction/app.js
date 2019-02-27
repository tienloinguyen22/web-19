const fs = require('fs');
const path = require('path');

// fs.writeFile('./test.txt', `
//   Test Nodejs
//   hahahahahahha
//   dfsdfsadf;askdflasdf
// `,
// (err) => {
//   if (err) {
//     throw err;
//   }
//   console.log('Write file success !!!');
// });

// fs.readFile('./test.txt', (error, data) => {
//   if (error) {
//     throw error;
//   } else {
//     console.log('Read file success');
//     console.log(data.toString());
//   }
// });

// fs.readdir('../buoi3-advanced-menu', (error, files) => {
//   if (error) {
//     throw error;
//   }
//   console.log('Read dir success');
//   console.log(files);
// });

// fs.watchFile('./test.txt', (current, previous) => {
//   console.log(current);
//   console.log(previous);
// });

console.log(__dirname);