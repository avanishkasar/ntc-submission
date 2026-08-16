# Practice — commit 2
# Topic: studied how sorted() on a string works character by character
# Time: 05-23-54 UTC

n = 1234
result = 0
while n > 0:
    result += n % 10
    n //= 10
print(result)  # 10
