# Practice commit 1
# Topic: studied string slicing and reversal in Python

n = 12345
rev = 0
while n > 0:
    rev = rev * 10 + n % 10
    n //= 10
print(rev)
