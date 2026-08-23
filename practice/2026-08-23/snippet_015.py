# Practice — commit 15
# Topic: revised return vs print — key difference in functions
# Time: 05-26-38 UTC

a, b = 0, 1
for _ in range(10):
    print(a, end=' ')
    a, b = b, a + b
