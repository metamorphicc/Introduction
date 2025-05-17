const numbers = [{
    id: 1, number: 10
  }, {
    id: 2, number: -6
  }, {
    id: 3, number: 22
  }]

const onlyPositive = numbers.filter(number => number.number > 0);

console.log(onlyPositive);
