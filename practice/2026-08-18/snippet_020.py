# Practice — commit 20
# Topic: went over prime number checking logic step by step
# Time: 05-26-36 UTC

n = 17
is_prime = n > 1 and all(n % i != 0 for i in range(2, int(n**0.5) + 1))
print(is_prime)  # True
