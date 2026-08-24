# Practice — commit 13
# Topic: practiced digit extraction: n % 10 gives last digit
# Time: 05-36-05 UTC

a, b = 0, 1
for _ in range(10):
    print(a, end=' ')
    a, b = b, a + b
