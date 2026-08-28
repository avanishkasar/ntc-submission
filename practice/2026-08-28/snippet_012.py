# Practice — commit 12
# Topic: studied in-place vs extra space solutions
# Time: 17-08-55 UTC

n = 17
is_prime = n > 1 and all(n % i != 0 for i in range(2, int(n**0.5) + 1))
print(is_prime)  # True
