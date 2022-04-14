function Fibonacci(n) {
  let fibonacciArray = [0, 1];
  for (let i = 0; i < n; i++) {
    fibonacciArray.push(fibonacciArray[i+1]+fibonacciArray[i])
  };
  console.log(fibonacciArray[n]);
  return fibonacciArray[n];
}

// Fib(10);