# Practice — commit 30
# Topic: went over how range() generates sequences
# Time: 05-25-44 UTC

# two sum brute force
nums, target = [2,7,11,15], 9
for i in range(len(nums)):
    for j in range(i+1, len(nums)):
        if nums[i]+nums[j]==target:
            print(i,j)
