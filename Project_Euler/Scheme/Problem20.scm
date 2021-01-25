(define (fib n)
  (define (fib-iter sum n)
    (cond ((= n 0) sum)
	  (else (fib-iter (* n sum) (- n 1)))))
  (fib-iter 1 n))

(define (number->list num)
  (define (iter arr num)
    (;;;;
