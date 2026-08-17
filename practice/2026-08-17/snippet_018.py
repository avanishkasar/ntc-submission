# Practice — commit 18
# Topic: revised return vs print — key difference in functions
# Time: 05-33-14 UTC

n = 1234
result = 0
while n > 0:
    result += n % 10
    n //= 10
print(result)  # 10
