var arr = [
  {name:"apple", count:10},
  {name:"orange", count:20},
  {name:"banana", count:30},
  {name:"orange", count:40},
  {name:"banana", count:50},
];


arr.splice(arr.findIndex(function (item) {
  return item.name === 'banana';
}), 1);

console.log(arr);
