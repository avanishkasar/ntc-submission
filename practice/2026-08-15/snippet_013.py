# Practice — commit 13
# Topic: practiced writing clean helper functions
# Time: 05-21-57 UTC

n = 12345
rev = 0
while n > 0:
    rev = rev * 10 + n % 10
    n //= 10
print(rev)  # 54321
