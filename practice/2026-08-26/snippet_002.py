# Practice — commit 2
# Topic: revised integer division // vs true division /
# Time: 05-30-39 UTC

n = 1234
result = 0
while n > 0:
    result += n % 10
    n //= 10
print(result)  # 10
