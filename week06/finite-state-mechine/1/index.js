function match(string) {
  for (let c of string) {
    if (c === "a") {
      return true;
    }
  }
  return false;
}

var result = match("i am a good coder");
console.log(result);
