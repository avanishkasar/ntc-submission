# Practice — commit 8
# Topic: went over while loop termination conditions
# Time: 05-27-11 UTC

n = 17
is_prime = n > 1 and all(n % i != 0 for i in range(2, int(n**0.5) + 1))
print(is_prime)  # True
