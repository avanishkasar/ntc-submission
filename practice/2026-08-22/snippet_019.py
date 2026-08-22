# Practice — commit 19
# Topic: studied how Python handles negative numbers in modulo
# Time: 05-24-39 UTC

left, right = 0, 9
while left < right:
    mid = (left + right) // 2
    print(mid)
    left = mid + 1
