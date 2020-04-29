# 表达式、类型转化

## Expression

### 1+(2\*3)

## Memeber

### a.b

### a[b]

### foo`string`

### new.target(判断函数是否是 new 出来的)

### super

### new Foo()

## Reference

### object

### key

## call

### foo()

### super();

### foo()['b']

### foo().b

### new a()['b']

## update

### a++

### a--

### ++a

### ++a++不成立

### ++a(++)不成立

## New

### new Foo()

### new a()

### new new a();

## left handside & right handside

### a.b=c

### a+b=c

### ++a++不成立

### ++(a++)不成立

## Unary

### delete a.b

### void foo()

### typeof a

### +a

### -a

### ~a

### !a

### await a

## Exponent

### 2**2**3

### \* / %

### + -

### << >> >>>

### instanceof

## Equality

### ==

### !=

### ===

### !==

## Logical

### &&

### ||

## conditional

### ? :

## Boxing && Unboxing

### 1. [Symbol.toPrimitive]

### 2. valueOf

### 3. toString

_XMind - Trial Version_

# 语句、对象

## Grammer

### 简单语句

- ExpressionStatement
- EmptyStatement
- DebuggerStatement
- ThrowStatement
- ContinueStatement
- BreakStatement
- ReturnStatement

### 复合语句

- BlockStatement

      	- {    }

- IfStatement
- SwitchStatement
- IterationStatement

      	- whle
      	- do while
      	- for
      	- for in
      	- for of

- WithStatement
- LabelledStatement

      	- 配合循环

- TryStatement

### 声明

- FunctionDeclaration

      	- function

- GeneratorDeclaration

      	- function *

- AsyncFunctionDeclaration

      	- async function

- AsyncGeneratorDeclaration

      	- async function  *

- VariableStatement

      	- var

- ClassDeclaration

      	- class

- LexicalDeclaration

      	- let
      	- const

## Completion Record

### normal

### break

### continue

### return

### throw

## pre process

## 作用域

_XMind - Trial Version_
