max = 1000
sum = 0
for i in range(max):
    if i % 3 == 0:
        sum = sum + i
    if i % 5 == 0:
        sum = sum + i
    if i % 5 == 0 and i % 3 == 0:
        sum = sum - i
print(sum)
