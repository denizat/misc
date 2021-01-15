// Deniz Method for integer square roots.
function intSqrt(x: number): number {
  var i: number = 0;
  while (i * i < x) {
    i++;
  }
  return i;
}

// Deniz Method for fractional exponents
function intPow(x: number, n: number, d: number): number {
  var i: number = 0;
  while (i ** d < x ** n) {
    i++;
  }
  return i;
}

// Babylonian method for demical square roots.
function babSqrt(x: number, epochs: number): number {
  // Deniz method for the inital guess
  var out: number = intSqrt(x);
  while (epochs > 0) {
    out = 0.5 * (out + x / out);
    epochs--;
  }
  return out;
}
