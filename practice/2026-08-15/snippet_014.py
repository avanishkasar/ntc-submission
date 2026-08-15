# Practice — commit 14
# Topic: studied in-place vs extra space solutions
# Time: 05-22-01 UTC

# two sum brute force
nums, target = [2,7,11,15], 9
for i in range(len(nums)):
    for j in range(i+1, len(nums)):
        if nums[i]+nums[j]==target:
            print(i,j)
