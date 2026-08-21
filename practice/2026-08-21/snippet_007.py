# Practice — commit 7
# Topic: reviewed two-pointer technique basics
# Time: 05-29-22 UTC

a, b = 0, 1
for _ in range(10):
    print(a, end=' ')
    a, b = b, a + b
