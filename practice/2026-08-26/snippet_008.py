# Practice — commit 8
# Topic: studied enumerate() — loop with index and value together
# Time: 05-31-15 UTC

# two sum hash map
nums, target = [2,7,11,15], 9
seen = {}
for i, n in enumerate(nums):
    if target - n in seen:
        print(seen[target-n], i)
    seen[n] = i
