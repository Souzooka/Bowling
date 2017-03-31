function bowling(arr) {
  var sum = 0;
  var sumArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  var throws = 0;
  var strikesArr = [];
  var spare;

  for (let i = 0; i < arr.length; i++) {

    if (i > 0 && Object.keys(arr[i-1]).length === 2 && (arr[i-1].throw1 + arr[i-1].throw2) === 10) {
      spare = true;
    } else {
      spare = false;
    }

    if (i > 0 && Object.keys(arr[i-1]).length === 1 && arr[i-1].throw1 === 10) {
      strikesArr.push(throws);
    }

    for (let score in arr[i]) {
      ++throws;
      sumArr[i] += arr[i][score];

      if (spare) {
        sumArr[i] += arr[i][score];
        spare = false;
      }

      for (let k = 0; k < strikesArr.length; k++) {
        if (throws - strikesArr[k] <= 2) {
          sumArr[i] += arr[i][score];
        }
      }

    }


  }

  for (let i = 0; i < sumArr.length; i++) {
    sum += sumArr[i];
  }

  return sum;

}

module.exports = bowling;