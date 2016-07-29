console.log(projs.all);
var testArr = [];
var $projArr = projs.all;
console.log($projArr);
$projArr.map(function(bob) {testArr.push(bob.size);});
console.log($projArr);
console.log(testArr);
testArr.reduce(function(a,b) {console.log(a + b);});
