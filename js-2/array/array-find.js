var arr = [
  {name:"apple", count:10},
  {name:"orange", count:20},
  {name:"banana", count:30},
  {name:"orange", count:40},
];

// arr.splice(arr.indexOf(arr.name == 'banana') +1, 1)

arr.splice(arr.indexOf(arr.find(function(item) {
	return item.name === 'banana';
})), 1);


console.log(arr);
