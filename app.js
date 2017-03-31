function bowling(arr) {
  var sum = 0;
  var sumArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var spare;

  for (let i = 0; i < arr.length; i++) {

    if (Object.keys(arr[0]).length === 2 && sumArr[i-1] === 10) {
      spare = true;
    } else {
      spare = false;
    }


    for (let score in arr[i]) {
      sumArr[i] += arr[i][score];
      if (spare) {
        sumArr[i] += arr[i][score];
        spare = false;
      }
    }


  }

  for (let i = 0; i < sumArr.length; i++) {
    sum += sumArr[i];
  }
  return sum;

}

module.exports = bowling;