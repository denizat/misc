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
t.speed(0)
t.width(1)


x = [[0,0]] # Array initialization and starting point 
n = 25 # Number of sides
r = 100 # Side length
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
    c = r/(2*m.sin(m.pi/n))
    t.penup()
    t.goto(0+r,0-c)
    t.pendown()
    for i in range(len(x)):
        for y in range(i,len(x)):
            t.goto(x[y][0]+r,x[y][1]-c)
            t.goto(x[i][0]+r,x[i][1]-c)
            # What does including this do? t.goto(x[y][0]+r,x[y][1]-c)

def between(a1,a2,b1,b2):
    if(a1 < b1 < a2 or a2 < b1 < a1):
        return True
    if(a1 < b2 < a2 or a2 < b2 < a1):
        return True
    if(b1 < a1 < b2 or b2 < a1 < b1):
        return True
    if(b1 < a2 < b2 or b2 < a2 < b1):
        return True
    return False


def intersects(a1,a2,b1,b2):
    return(between(a1[0],a2[0],b1[0],b2[0]) and between(a1[1],a2[1],b1[1],b2[1])) 
'''
# Completely Broken

def intersectionPoint(a1,a2,b1,b2):
    # Division by zero shouldnt be happening but it is so this is here
    if(a1[0]== a2[0] or b1[0] == b2[0]):
        return [0,0]
    ma = (a1[1]-a2[1])/(a1[0]-a2[0]) 
    ba = a1[1]-ma*a1[0]
    mb = (b1[1]-b2[1])/(b1[0]-b2[0])
    bb = b1[1]-mb*b1[0]
    if(ma == mb):
        return [0,0]
    x = (bb-ba)/(ma-mb)
    y = (bb-ba)/(mb-ma)
    return [x,y]

def makeIntersection(a1,a2,b1,b2):
    if(intersects(a1,a2,b1,b2)):
            x.append(intersectionPoint(a1,a2,b1,b2))

def iterate():
    length = len(x)
    for i in range(length):
        for j in range(length):
            for h in range(length):
                for k in range(length):
                    makeIntersection(x[i],x[j],x[h],x[k])
'''

initalizePolygon()
# iterate()
draw()
t.done()
