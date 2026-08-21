# Practice — commit 9
# Topic: went over list vs set — when to use which
# Time: 05-29-34 UTC

# two sum brute force
nums, target = [2,7,11,15], 9
for i in range(len(nums)):
    for j in range(i+1, len(nums)):
        if nums[i]+nums[j]==target:
            print(i,j)
