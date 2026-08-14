# Practice — commit 4
# Topic: studied how Python dicts handle collisions
# Time: 06-11-12 UTC

n = 12345
rev = 0
while n > 0:
    rev = rev * 10 + n % 10
    n //= 10
print(rev)  # 54321
