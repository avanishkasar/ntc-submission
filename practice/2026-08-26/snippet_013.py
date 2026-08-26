# Practice — commit 13
# Topic: revised recursion — base case and recursive case
# Time: 05-31-41 UTC

s = 'hello world'
count = sum(1 for ch in s.lower() if ch in 'aeiou')
print(count)  # 3
