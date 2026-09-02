# Practice commit 2
# Topic: practiced set operations: union intersection difference

n = 12345
rev = 0
while n > 0:
    rev = rev * 10 + n % 10
    n //= 10
print(rev)
