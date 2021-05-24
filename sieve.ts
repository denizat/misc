const makeArray = (max: number): number[] => {
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

const mA = (max) => {
  let arr = [];
  for (let i = 0; i < max; i++) {
    arr[i] = i;
  }
  return arr;
};

const sieve = (arr: number[]): number[] => {
  let primes = arr.splice(0, 1);
  let prime: number = primes[primes.length - 1];
  while (arr.length > 0) {
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

const fastSieve = (arr: number[]): number[] => {
  for (let i = 2; i < arr.length; i++) {
    while (arr[i] === 0) {
      i += 1;
    }
    for (let k = 2; k * i < arr.length; k++) {
      arr[k * i] = 0;
    }
  }

  return arr.slice(2, -1);
};

const functionalSieve = (arr: number[]): number[] => {
  if (arr[1] !== undefined) {
    return [
      arr[0],
      ...functionalSieve(arr.filter((notPrime) => notPrime % arr[0] !== 0)),
    ];
  }
  return [arr[0]];
};

const time = (fn: Function, param): number => {
  const t0 = performance.now();
  fn(param);
  const t1 = performance.now();
  return t1 - t0;
};

const max = 10000;

const slow = sieve(makeArray(max));
const fast = fastSieve(mA(max)).filter((a) => a !== 0);
const fun = functionalSieve(makeArray(max));
console.log(
  fun.length === slow.length &&
    slow.length === fast.length &&
    slow.every(function (value, index) {
      return value === fast[index];
    }) &&
    fun.every(function (value, index) {
      return value === fast[index];
    })
);

// console.log(`max: ${max}`);
// console.log(`fastSieve: ${time(fastSieve, mA(max))}`);
// console.log(`sieve: ${time(sieve, makeArray(max))}`);
// console.log(`functionalSieve: ${time(functionalSieve, makeArray(max))}`);
// console.log("------------------------");

// let max = 1;
// for (; ; max *= 10) {
//   console.log(`max: ${max}`);
//   console.log(`fastSieve: ${time(fastSieve, mA(max))}`);
//   // console.log(`sieve: ${time(sieve, makeArray(max))}`);
//   console.log("------------------------");
// }
