# brain-games

[![Maintainability](https://api.codeclimate.com/v1/badges/de492b306fa2834a0280/maintainability)](https://codeclimate.com/github/DimaKabanov/project-lvl1-s256/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/de492b306fa2834a0280/test_coverage)](https://codeclimate.com/github/DimaKabanov/project-lvl1-s256/test_coverage)
[![Build Status](https://travis-ci.org/DimaKabanov/project-lvl1-s256.svg?branch=master)](https://travis-ci.org/DimaKabanov/project-lvl1-s256)

## Install

```console
npm install -g dk-brain-games
```

## Setup

```console
make install
```

## Available games

- [brain-even](#brain-even) - even or odd number
- [brain-calc](#brain-calc) - calculate the value of a mathematical expression
- [brain-gcd](#brain-gcd) - find the largest common divisor of two numbers
- [brain-balance](#brain-balance) - balance the given number
- [brain-progression](#brain-progression) - find the number in the progression
- [brain-prime](#brain-prime) - prime or composite number


## Example game:

**<a name="brain-even"></a>brain-even**
```console
$ brain-even

Welcome to the Brain Games!
Answer "yes" if number even otherwise answer "no".

May I have your name? Sam
Hello, Sam!

Question: 15
Your answer: no
Correct!
Question: 6
Your answer: yes
Correct!
Question: 7
Your answer: no
Correct!
Congratulations, Sam!
```

**<a name="brain-calc"></a>brain-calc**
```console
$ brain-calc

Welcome to the Brain Games!
What is the result of the expression?

May I have your name? Sam
Hello, Sam!

Question: 4 + 10
Your answer: 14
Correct!
Question: 25 - 11
Your answer: 14
Correct!
Question: 25 * 7
Your answer: 175
Correct!
Congratulations, Sam!
```

**<a name="brain-gcd"></a>brain-gcd**
```console
$ brain-gcd

Welcome to the Brain Games!
Find the greatest common divisor of given numbers.

May I have your name? Sam
Hello, Sam!

Question: 25 50
Your answer: 25
Correct!
Question: 100 52
Your answer: 4
Correct!
Question: 3 9
Your answer: 3
Correct!
Congratulations, Sam!
```

**<a name="brain-balance"></a>brain-balance**
```console
$ brain-balance

Welcome to the Brain Game!
Balance the given number.

May I have your name? Sam
Hello, Sam!

Question: 215
Your answer: 233
Correct!
Question: 4181
Your answer: 3344
Correct!
Question: 355
Your answer: 445
Correct!
Congratulations, Sam!
```

**<a name="brain-progression"></a>brain-progression**
```console
$ brain-progression

Welcome to the Brain Game!
What number is missing in this progression?

May I have your name? Sam
Hello, Sam!

Question: 5 7 9 11 13 .. 17 19 21 23
Your answer: 15
Correct!
Question: 1 2 3 .. 5 .. 7 8 9 10
Your answer: 4 6
Correct!
Question: 2 5 8 .. 14 17 20 23 26 29
Your answer: 11
Correct!
Congratulations, Sam!
```

**<a name="brain-prime"></a>brain-prime**
```console
$ brain-prime

Welcome to the Brain Game!
Answer "yes" if number prime otherwise answer "no".

May I have your name? Sam
Hello, Sam!

Question: 2
Your answer: yes
Correct!
Question: 3
Your answer: yes
Correct!
Question: 6
Your answer: no
Correct!
Congratulations, Sam!
```