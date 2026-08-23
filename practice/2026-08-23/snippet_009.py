# Practice — commit 9
# Topic: revised BFS and DFS difference
# Time: 05-26-08 UTC

n = 100
for i in range(1, n+1):
    if i % 15 == 0: print('FizzBuzz')
    elif i % 3 == 0: print('Fizz')
    elif i % 5 == 0: print('Buzz')
    else: print(i)
