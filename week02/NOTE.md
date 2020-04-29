# 每周总结可以写在这里

# 编程语言通识

## 按语法分类

### 非形式语言

- 中文

### 形式语言

- 0 型：无限制文法

      	- <b><a> ::= c

- 1 型：上下文相关文法

      	- “a”<b>"c" ::="a""x""c"

- 2 型：上下文无关文法

      	- js大部分是上下文无关文法

- 3 型：正则文法

      	- 限制表达能力

## 产生式 BNF

```
<Number> = "0" | "1" | "2" | ..... | "9"

<DecimalNumber> = "0" | (("1" | "2" | ..... | "9") <Number>\* )

<PrimaryExpression> = <DecimalNumber> |
"(" <LogicalExpression> ")"

<MultiplicativeExpression> = <PrimaryExpression> |
<MultiplicativeExpression> "\*" <PrimaryExpression>|
<MultiplicativeExpression> "/" <PrimaryExpression>

<AdditiveExpression> = <MultiplicativeExpression> |
<AdditiveExpression> "+" <MultiplicativeExpression>|
<AdditiveExpression> "-" <MultiplicativeExpression>

<LogicalExpression> = <AdditiveExpression> |
<LogicalExpression> "||" <AdditiveExpression> |
<LogicalExpression> "&&" <AdditiveExpression>
```

## 图灵完备性

### 命令式--图灵机

- goto
- if while

### 声明式--lambda

- 递归
- 分治

## 类型系统

### 动态／静态

### 强类型／弱类型

### 符合类型

### 子类型

- 逆变
- 协变

# Javascript

## unicode

### 常用拉丁字符 U+0000 ～ U+007F

- String.fromCharCode(ascii)

### U+4E00 ~ U+9FFF: CJK(ChinaJapaneseKorean) 有一些增补区域（extension）

### BMP 基本字符 U+0000 - U+FFFF

### https://www.fileformat.info/info/unicode/block/index.htm

## Lexical

### inputElement

- whiteSpace

      	- Tab 制表符
      	- VT 纵向制表符
      	- FF FormFeed
      	- SP  普通空格
      	- NBSP 不会断开

- LineTerminator

      	- LF \n
      	- CR \r
      	- LS
      	- PS

- Comment

      	- //
      	- /**/

- token

      	- Punctuator

      		- + - * / = > < >= ...

      	- identiferName

      		- identifer标识符

      			- 变量名
      			- 属性名

      		- keywords

      			- 未来保留关键字 enum

      	- Literal直接量

      		- Number

      			- 浮点数比较时注意精度范围  Number.EPSILON
      			- 浮点数采用IEEE 754标准  64位表示
      			- Number.MAX_SAFE_INTEGER
      			- grammer

      				- DecimalLiteral

      					- 0.2
      					- .2
      					- 2.
      					- 2e2 科学计数法

      				- BinaryIntegerLiteral

      					- 0b001
      					- 二进制转换(97).toString(2)

      				- OctoIntegerLiteral

      					- 0b010

      				- HexIntegerLiteral

      					- 0xFF
      					- '厉'.codeCodeAt(0).toString(16)

      		- String

      			- grammer

      				- 'abc'
      				- "abc"
      				- `abc`

      		- Boolean
      		- Null
      		- Undefined

_XMind - Trial Version_
