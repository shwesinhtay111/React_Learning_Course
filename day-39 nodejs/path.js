const path = require("path");

let p ="src/pkg/test.js";

console.log("path name:",path.basename(p));

console.log("dirname",path.dirname(p))
console.log("extname",path.extname(p))