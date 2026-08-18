# Practice — commit 14
# Topic: reviewed two-pointer technique basics
# Time: 05-25-56 UTC

# binary search
arr, target = [1,3,5,7,9], 7
l, r = 0, len(arr)-1
while l <= r:
    m = (l+r)//2
    if arr[m]==target: print(m); break
    elif arr[m]<target: l=m+1
    else: r=m-1
