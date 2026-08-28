# Practice — commit 22
# Topic: revised recursion — base case and recursive case
# Time: 17-09-51 UTC

n = 12345
rev = 0
while n > 0:
    rev = rev * 10 + n % 10
    n //= 10
print(rev)  # 54321
