# Practice — commit 9
# Topic: studied how sorted() on a string works character by character
# Time: 05-26-46 UTC

# two sum brute force
nums, target = [2,7,11,15], 9
for i in range(len(nums)):
    for j in range(i+1, len(nums)):
        if nums[i]+nums[j]==target:
            print(i,j)
