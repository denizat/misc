;;(define (% x y)
;;  (cond ((< x y)  x)
;;	(else (% (- x y) y))))


(define (d n)
  (define (iter sum num)
    (cond ((not (> n num)) sum)
	  ((= 0 (modulo n num)) (iter (+ sum num) (+ num 1)))
	  (else (iter sum (+ num 1)))))
  (iter 0 1))

(define (pair a b)
  (cond ((= a b) #f)
    	((and (= (d a) b) (= a (d b))) #t)
	(else #f)))

(define (loop top)
  (define (iter a b sum)
    (cond ((= a top) sum)
	  ((= b top) (iter (+ a 1) a sum))
	  ((pair a b) (iter (+ a 1) (+ b 1) (+ sum a b)))
	  (else (iter a (+ b 1) sum))))
  (iter 1 1 0))

(loop 200)
