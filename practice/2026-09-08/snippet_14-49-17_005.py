# Practice commit 5
# Topic: revised edge cases: empty input single element negatives

n = 12345
rev = 0
while n > 0:
    rev = rev * 10 + n % 10
    n //= 10
print(rev)
