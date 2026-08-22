# Practice — commit 12
# Topic: practiced stack-based problem solving
# Time: 05-24-03 UTC

n = 1234
result = 0
while n > 0:
    result += n % 10
    n //= 10
print(result)  # 10
