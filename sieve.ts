const makeArray = (max): number[] => {
  let arr = [];

  //   for (let i = 2; i < max; i++) {
  //     i += 1;
  //     arr[Math.round((i - 2) / 2)] = i;
  //   }

  for (let i = 2; i < max; i++) {
    arr[i - 2] = i;
  }

  return arr;
};

const sieve = (arr: number[]): number[] => {
  let primes = arr.splice(0, 1);
  let prime: number = primes[primes.length - 1];
  while (arr.length > 0) {
    console.log(prime);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % prime === 0) {
        arr.splice(i, 1);
        i -= 1;
      }
    }
    primes.push(arr.splice(0, 1)[0]);
    prime = primes[primes.length - 1];
  }
  return primes;
};
console.log(sieve(makeArray(100000)));
