//パスは拡張子を省略することも可能
var func = require('./func');
//console.log(func);
//{ add: [Function (anonymous)], sub: [Function (anonymous)] }
console.log(func.add(1,2));
console.log(func.sub(10,3));