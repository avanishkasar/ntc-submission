# Practice commit 4
# Topic: practiced range() with start stop and step

n = 1234
result = 0
while n > 0:
    result += n % 10
    n //= 10
print(result)
