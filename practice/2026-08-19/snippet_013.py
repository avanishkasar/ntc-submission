# Practice — commit 13
# Topic: studied how Python dicts handle collisions
# Time: 05-27-04 UTC

a, b = 0, 1
for _ in range(10):
    print(a, end=' ')
    a, b = b, a + b
