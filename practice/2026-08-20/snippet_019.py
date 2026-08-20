# Practice — commit 19
# Topic: practiced sorted() and how it works on strings
# Time: 05-28-08 UTC

n = 17
is_prime = n > 1 and all(n % i != 0 for i in range(2, int(n**0.5) + 1))
print(is_prime)  # True
