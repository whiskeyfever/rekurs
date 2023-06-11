const factorial = (() => {
    const memo = {};
  
    const calculate = (n) => {
      if (n === 0 || n === 1) {
        return 1;
      }
  
      if (memo[n]) {
        return memo[n];
      }
  
      const result = n * calculate(n - 1);
      memo[n] = result;
      return result;
    };
  
    return calculate;
  })();
  
  const number = 6;
  const result = factorial(number);
  console.log(`Факториал числа ${number}: ${result}`);
  