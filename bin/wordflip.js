#!/usr/bin/env node

var upsidedown = require('upsidedown');

if(process.argv.length < 3) {
  console.log('Nothing to flip. ︵ /(.□. ）');
  process.exit(1);
}
var args = process.argv.splice(2);
console.log('(╯°□°）╯ '+ upsidedown(args.join(' ')));
