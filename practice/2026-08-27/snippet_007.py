# Practice — commit 7
# Topic: revised integer division // vs true division /
# Time: 16-04-56 UTC

left, right = 0, 9
while left < right:
    mid = (left + right) // 2
    print(mid)
    left = mid + 1
