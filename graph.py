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

import math as m, turtle as t
t.bgcolor("black")
t.color("white") 
t.speed(5)


x = [[0,0]] # Array initialization and starting point 
n = 10 # Number of sides
r = 200 # Side length
angle = 2*m.pi/n
angleinc = angle
def initalizePolygon():
    for i in range(1,n):
        global angle
        global angleinc
        angle += angleinc
        x.append([x[i-1][0]+m.cos(angle),x[i-1][1]+m.sin(angle)])
    for i in range(1,n):
        x[i][0] =x[i][0]*r 
        x[i][1] = x[i][1]*r

# Draws all of the connections between all of the points in the x array.
def draw():
    for i in range(len(x)):
        for y in range(i,len(x)):
            t.goto(x[y])
            t.goto(x[i])


def checkY(a1,a2,b1,b2):

def between(a1,a2,b1,b2):
def checkX(a1x,a2x,b1x,b2x):
    if(between(a1x,b1x,a2x)
# Takes line segments a1-a2 and b1-b2 and checks if the intersect.
def intersects(a1,a2,b1,b2):


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

initalizePolygon()
draw()
done()
