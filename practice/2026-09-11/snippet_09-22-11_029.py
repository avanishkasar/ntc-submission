# Practice commit 29
# Topic: studied binary search: how it halves search space

a, b = 0, 1
for _ in range(10):
    print(a, end=' ')
    a, b = b, a + b
