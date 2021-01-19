# Table of Contents
1. [Chapter 1](#chapter1)

# Chapter 1
## Exercise 1.1

		10
		12
		8
		3
		8 + (-2) = 6


		3 + 4 + (3 * 4) = 7 + 12 = 19
		false
		if true and true return b else return a = b
		if a = 4 return 6, if b = 4 return 16, else return 25 = 16
		2 + if 4 > 3 return 4 else return 3 = 6
		if 3 > 4 return 3, if 3 < 4 return 4, else return -1, * 4 = 16
## Exercise 1.2

		(/ (+ 5 4 (- 2 (- 3 (+ 6 (/ 4 5))))) (* 3 (- 6 2) (- 2 7)))
## Exercise 1.3

		(define (sum-squares x y)
			(+ (* x x) (* y y)))

		(define (>= a b)
		  (or (> a b) (= a b)))

		(define (f x y z)
		  (cond ((= x y z) "error: numbers are equivalent")
			((and (>= x y) (> y z)) (sum-squares x y))
			((and (>= y x) (> z x)) (sum-squares y z))
			(else (sum-squares z x))))
## Excercise 1.4
The procedure adds b to a if b is greater than zero and subtracts b from a if b is less than zero.
## Excercise 1.5
If the interpreter uses applicative-order evaluation then the test will return 0, if the interpreter uses normal-order evaluation then it will get stuck in an infinite loop. This is because applicative-order evaluation just executes the function and expands the subfunctions when it encounters a non-prmitive, while normal-order evaulation expands the function completely before executing it and thus will get stuck defining p.
## Excercise 1.6
I had to cheat a bit for this one but then I finally got it. Normally the interpreter evaluates the operands then applies the operator to the operands. If is a special case because the interpreter first evaluates the predicate then the operator then the rest. Cond is also a special case in the same way. However, when you make a function out of a special function, the new function behaves like a normal function. So if the new function calls itself it will be stuck in a forever loop. Alyssa's sqrt-iter function calls itself in a user defined if function. So the function will call istelf forever in recursive hell.
## Excercise 1.7
The good-enough? test is not very effective for finding the square roots of very small numbers. This is because the good-enough? test checks to dee if the difference between the square of the guess and the radicand is very small, but if the radicand is itself very small then the difference between the square of the guess and the radicand will always be small.

The good-enough? test is also not vert effective for very large numbers. This is because computers have impercise floating point percision and the larger a number is the less precise its decimal portion will be. This means for extemely large numbers the given percision for the good-enough? test might be too small to ever return true.
## Excercise 1.8

		(define (improve y x)
		  (/ (+ (/ x (* y y)) (* 2 y)) 3))

		(define (cube x)
		  (* x x x))

		(define (good-enough? guess x)
		  (< (abs (- (cube guess) x)) 0.001))

		(define (cbrt-iter guess x)
		  (if (good-enough? guess x)
		      guess
		      (cbrt-iter (improve guess x) x)))

		(define (cbrt x)
		  (cbrt-iter 1.0 x))
