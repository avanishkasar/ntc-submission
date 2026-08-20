# Practice — commit 17
# Topic: revised return vs print — key difference in functions
# Time: 05-27-57 UTC

n = 12345
rev = 0
while n > 0:
    rev = rev * 10 + n % 10
    n //= 10
print(rev)  # 54321
