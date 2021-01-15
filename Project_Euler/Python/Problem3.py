import numpy as np

def isPrime(number):
    for i in np.arange(3.0,np.sqrt(number),2):
        if number % i == 0:
            return 0
    return 1
def lpf(n):
    for i in np.arange(1.0,np.sqrt(n),2):
        if n % i == 0 and isPrime(i):
            prime = i
    return prime

print(lpf(600851475143))
