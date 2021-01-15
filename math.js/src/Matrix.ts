type infNum = number | Array<infNum>;

// Recursive array sum.
function sum(x: infNum): number {
  var out: number = 0;
  if (Array.isArray(x)) {
    for (var i = 0; i < x.length; i++) {
      out += sum(x[i]);
    }
  } else {
    out += x;
  }
  return out;
}

// Applies a function to every element of an array and returns the modified array.
function applyFun(x: infNum, fun: Function): infNum {
  if (Array.isArray(x)) {
    for (var i = 0; i < x.length; i++) {
      x[i] = fun(x[i]);
    }
  } else {
    x = fun(x);
  }
  return x;
}

function applyValue(x: any, val: any): any {
  if (Array.isArray(x)) {
    for (var i = 0; i < x.length; i++) {
      x[i] = applyValue(x[i], val);
    }
  } else {
    x = val;
  }
  return x;
}
