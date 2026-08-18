# Practice — commit 10
# Topic: went over list vs set — when to use which
# Time: 05-25-35 UTC

a, b = 0, 1
for _ in range(10):
    print(a, end=' ')
    a, b = b, a + b
