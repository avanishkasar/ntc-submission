# Practice — commit 14
# Topic: studied string slicing and reversal tricks in Python
# Time: 05-27-44 UTC

a, b = 0, 1
for _ in range(10):
    print(a, end=' ')
    a, b = b, a + b
