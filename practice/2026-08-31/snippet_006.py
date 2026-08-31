# Practice — commit 6
# Topic: reviewed two-pointer technique basics
# Time: 09-52-04 UTC

# two sum hash map
nums, target = [2,7,11,15], 9
seen = {}
for i, n in enumerate(nums):
    if target - n in seen:
        print(seen[target-n], i)
    seen[n] = i
