const s1 = require('fs').readFileSync(0, 'utf8').trim();
const s2 = require('fs').readFileSync(0, 'utf8').trim();
const s3 = require('fs').readFileSync(0, 'utf8').trim();
console.log(s1, s2, s3);
if (s1 === s2  &&  s2 === s3 && s1 === s3) {
    console.log("Equilateral")
}
else if  (s1 === s2 ||  s2 ===s3) {
    console.log("Isosceles")
}
else {
    console.log("Scalene")
}
