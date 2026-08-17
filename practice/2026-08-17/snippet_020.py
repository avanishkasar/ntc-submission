# Practice — commit 20
# Topic: studied time complexity — O(n) vs O(log n) vs O(n²)
# Time: 05-33-23 UTC

n = 1234
result = 0
while n > 0:
    result += n % 10
    n //= 10
print(result)  # 10
