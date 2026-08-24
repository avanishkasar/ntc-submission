# Practice — commit 6
# Topic: practiced range() with start, stop, and step
# Time: 05-35-26 UTC

n = 1234
result = 0
while n > 0:
    result += n % 10
    n //= 10
print(result)  # 10
