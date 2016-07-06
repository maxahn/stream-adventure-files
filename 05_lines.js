var split = require('split');
var through = require('through2');

var oddOrEven = 1;
process.stdin
  .pipe(split())
  .pipe(through(function(line, _, next) {
  
    if (oddOrEven % 2 == 0) {
      console.log(line.toString().toUpperCase());
    } else {
      console.log(line.toString().toLowerCase());
    }

    oddOrEven++;
    next();
  }));
