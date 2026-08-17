# Practice — commit 21
# Topic: revised recursion — base case and recursive case
# Time: 05-33-29 UTC

n = 1234
result = 0
while n > 0:
    result += n % 10
    n //= 10
print(result)  # 10
