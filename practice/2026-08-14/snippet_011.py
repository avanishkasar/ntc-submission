# Practice — commit 11
# Topic: went over how range() generates sequences
# Time: 06-11-44 UTC

a, b = 0, 1
for _ in range(10):
    print(a, end=' ')
    a, b = b, a + b
