'''
This program plots all of the lines produced by connecting all of the points in an array.
The array is then interated by producing new intersections from all of the lines produced by the old array.

TODO:
* Split everything up into little functions.
** iterate()
** draw()
** etc...

* Do the logic for intersection checking (be careful not to forget about colinearity and single dimention colinearity).

* Make all of the algorithims more efficient.
'''

from turtle import *
from math import *
bgcolor("black")
color("white") 
speed(5)
n = 10 # Number of sides
r = 200 # Side length
epochs = 1 # Number of iterations
x = [[0,0]] # Array initialization and starting point 

angle = 2*pi/n
angleinc = angle

for i in range(1,n):
    angle += angleinc
    x.append([x[i-1][0]+cos(angle),x[i-1][1]+sin(angle)])
for i in range(1,n):
    x[i][0] =x[i][0]*r 
    x[i][1] = x[i][1]*r

for i in range(n):
    for y in range(i,n):
        goto(x[y])
        goto(x[i])

done()
'''
def intersects():
    return # True or false
def intersection():
    return [a,b]

while(epochs > 0):
    epochs -= 1
    if epochs > 1:
        length = len(x) 
        for i in range(length):
            for j in range(i,length):
                for h in range(length):
                    if h = i or h = j:
                        h += 1
                    for k in range(h,length):
                        if k = i or k = j:
                            k += 1
                        if(intersects(x[i],x[j])):
                            x.append(intersection(x[i],x[j]))
'''