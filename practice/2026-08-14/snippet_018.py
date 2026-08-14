# Practice — commit 18
# Topic: revised edge cases — empty input, single element, negatives
# Time: 06-12-27 UTC

# two sum hash map
nums, target = [2,7,11,15], 9
seen = {}
for i, n in enumerate(nums):
    if target - n in seen:
        print(seen[target-n], i)
    seen[n] = i
