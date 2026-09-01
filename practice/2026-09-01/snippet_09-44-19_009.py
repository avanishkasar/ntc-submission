# Practice commit 9
# Topic: practiced range() with start stop and step

n = 12345
rev = 0
while n > 0:
    rev = rev * 10 + n % 10
    n //= 10
print(rev)
