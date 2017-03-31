function bowling(arr) {
  var sum = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let score in arr[i]) {
      sum += arr[i][score];
    }
  }

  return sum;

}

module.exports = bowling;