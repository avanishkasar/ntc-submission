# Practice — commit 16
# Topic: studied time complexity — O(n) vs O(log n) vs O(n²)
# Time: 11-29-20 UTC

n = 12345
rev = 0
while n > 0:
    rev = rev * 10 + n % 10
    n //= 10
print(rev)  # 54321
