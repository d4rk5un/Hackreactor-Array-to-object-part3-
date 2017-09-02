var array = [
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
];

/*Expected output:
[
    {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
    {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
]
*/

var obj = obj = array[0];
var obj2 = obj2 = array[1];
var arr = [];

var x = obj.reduce(function(acc, cur) {
  acc[cur[0]] = cur[1];
  return acc;
}, {});

var y = obj2.reduce(function(acc, cur) {
  acc[cur[0]] = cur[1];
  return acc;
}, {});

arr.push(x, y);
