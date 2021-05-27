// Increasingly short recursive fizzbuzz

function fizzbuzz(max, n, list) {
  if (n === undefined) {
    n = 1;
  }
  if (list === undefined) {
    list = "";
  }
  if (n !== max) {
    if (!(n % 3)) {
      list += "fizz";
      if (!(n % 5)) {
        list += "buzz";
      }
      list += " ";
    } else if (!(n % 5)) {
      list += "buzz ";
    } else {
      list += n.toString() + " ";
    }
    return list + fizzbuzz(max, n + 1, "");
  } else {
    return "";
  }
}

function fb(max, n) {
  if (n === undefined) {
    n = 1;
  }
  if (n !== max + 1) {
    if (!(n % 3)) {
      if (!(n % 5)) {
        return "fizzbuzz " + fb(max, n + 1);
      }
      return "fizz " + fb(max, n + 1);
    } else if (!(n % 5)) {
      return "buzz " + fb(max, n + 1);
    } else {
      return n.toString() + " " + fb(max, n + 1);
    }
  } else {
    return "";
  }
}

function f(max) {
  if (max !== 0) {
    if (!(max % 3)) {
      if (!(max % 5)) {
        return f(max - 1) + "fizzbuzz ";
      }
      return f(max - 1) + "fizz ";
    } else if (!(max % 5)) {
      return f(max - 1) + "buzz ";
    } else {
      return f(max - 1) + max.toString() + " ";
    }
  } else {
    return "";
  }
}

console.log(
  (function a(e) {
    if (e !== 0) {
      if (!(e % 3) || !(e % 5)) {
        console.log(`${!(e % 3) ? "fizz" : ""}`);
        return a(e - 1) + `${!(e % 3) ? "fizz" : ""}${!(e % 5) ? "buzz" : ""}`;
      } else {
        return a(e - 1) + " " + e.toString() + " ";
      }
    } else {
      return "";
    }
  })(100)
);
