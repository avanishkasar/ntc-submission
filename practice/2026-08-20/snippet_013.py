# Practice — commit 13
# Topic: revised recursion — base case and recursive case
# Time: 05-27-38 UTC

# two sum hash map
nums, target = [2,7,11,15], 9
seen = {}
for i, n in enumerate(nums):
    if target - n in seen:
        print(seen[target-n], i)
    seen[n] = i
