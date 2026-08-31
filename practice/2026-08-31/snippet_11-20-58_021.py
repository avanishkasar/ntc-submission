# Practice commit 21
# Topic: studied sorted() on string character by character

n = 17
is_prime = n > 1 and all(n % i != 0 for i in range(2, int(n**0.5)+1))
print(is_prime)
