convertStringToNumber

```
function convertStringToNumber(string, radix = 10) {
  if (radix > 10) {
    return;
  }
  let flag = /e|E/.test(string);
  if (!flag) {
    let chars = string.split('');
    let number = 0;
    let i = 0;
    while (i < chars.length && chars[i] != '.') {
      number = number * radix;
      number += chars[i].codePointAt(0) - '0'.codePointAt(0);
      i++;
    }
    if (chars[i] === '.') {
      i++;
    }
    let fraction = 1;
    while (i < chars.length) {
      fraction /= radix;
      number += (chars[i].codePointAt(0) - '0'.codePointAt(0)) * fraction;
      i++;
    }
    return number;
  } else {
    let logNumber = Number(string.match(/\d+$/)[0]);
    let number = string.match(/^[\d\.]+/)[0].replace(/\./, '');
    if (/e-|E-/.test(string)) {
      return Number(number.padEnd(logNumber + 1, 0));
    } else {
      return Number(number.padStart(logNumber + number.length, 0).replace(/^0/, '0.'));
    }
  }
}

```

convertNumberToString

```
function convertNumberToString(number, radix) {
  let integer = Math.floor(number);
  let fraction = String(number).match(/\.\d+$/);
  if (fraction) {
    fraction = fraction[0].replace('.', '');
  }
  let string = '';
  while (integer > 0) {
    string = String(integer % radix) + string;
    integer = Math.floor(integer / radix);
  }
  return fraction ? `${string}.${fraction}` : string;
}
```

找出 JavaScript 标准里所有的对象，分析有哪些对象是我们无法实现出来的，这些对象都有哪些特性？

1. Date

```
Date()返回的是字符串类型， new Date()返回的是对象类型
```

2. Array

```
var a = [];
a[100分] = 1;

a.length;   // 101
Array的length属性会自动加上去
```

3. Math

```
Math对象不可以被new， 只能直接去调用Math.random()
```

4. null

```
只能用来给变量赋值，没有prototype也没有[[prototype]]指向，但所有对象的原型链最终指向到null
```

5. parseInt

```
 parseInt(1 / (1000*60*60))会把得出的数字先转换为字符串2.7777777777777776e-7然后再转换为数字2
 而实际想要执行得到的结果 Math.floor(1 / (1000 * 60* 60))
```
