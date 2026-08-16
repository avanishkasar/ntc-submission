# Practice — commit 22
# Topic: revised dynamic programming — overlapping subproblems
# Time: 05-25-50 UTC

a, b = 0, 1
for _ in range(10):
    print(a, end=' ')
    a, b = b, a + b
