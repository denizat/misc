;; This doesn't work, need to fix

(defun isPrime(number)
  (setq i 3)
  (setq return 2)
  (while (and (< i (sqrt number)) (eq return 2))
    (if (eq 0 (% number i))
	(setq return 0))
    (setq i (+ i 2)))
  (if (eq return 2)
      (setq return 1))
  return)
(isPrime 9213912374)

(defun lpf(n)
  (setq prime 0)
  (setq i 1)
  (while (< i (sqrt n))
    (if (and (eq 0 (% n i)) isPrime(i))
	(setq prime i))
    (setq i (+ i 2)))
  (print prime))

(lpf 13195)
