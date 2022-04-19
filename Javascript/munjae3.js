function isPrime(num) {
  if (num == 2)
    return true;

  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

function sosu(nums) {
  let primeCount = 0;
  let set = new Set(nums);
  nums = [...set];
  let sums = [];
  // console.log(nums.length)
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = i + 2; k < nums.length; k++) {
        if (nums[j] != nums[k]) {
          sums.push(nums[i] + nums[j] + nums[k])
        }
      }
    }
  }
  let tempSet = new Set(sums);
  sums = [...tempSet];
  console.log(sums);
  for (let m = 0; m < sums.length; m++) {
    if (isPrime(sums[m])) {
      primeCount++;
    }
  }
  console.log(primeCount)
  return primeCount;
}

// sosu([1, 2, 7, 6, 4])


