# Practice commit 6
# Topic: went over while loop termination conditions

n = 1234
result = 0
while n > 0:
    result += n % 10
    n //= 10
print(result)
