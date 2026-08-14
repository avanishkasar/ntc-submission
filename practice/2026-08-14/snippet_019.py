# Practice — commit 19
# Topic: practiced range() with start, stop, and step
# Time: 06-12-35 UTC

# two sum hash map
nums, target = [2,7,11,15], 9
seen = {}
for i, n in enumerate(nums):
    if target - n in seen:
        print(seen[target-n], i)
    seen[n] = i
