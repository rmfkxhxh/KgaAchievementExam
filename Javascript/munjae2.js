function sum(absolutes, signs) {
  let sum = 0;
  for (let i =0; i < absolutes.length; i++) {
    if (signs[i]) {
      sum += absolutes[i];
    } else {
      sum -= absolutes[i];
    }
  }

  console.log(sum);
  return sum;
}

// let absolutes = [4,7,12]
// let signs = [true, false, true];

// sum(absolutes, signs);