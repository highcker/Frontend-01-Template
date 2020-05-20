function match(string) {
  let foundA = false;
  for (let c of string) {
    if (c === "a") {
      foundA = true;
    } else if (foundA && c === "b") {
      return true;
    } else {
      foundA = false;
    }
  }

  return false;
}

var result = match("i am abt");

console.log(result);
