# Practice — commit 12
# Topic: practiced set operations — union, intersection, difference
# Time: 16-05-27 UTC

s = 'hello world'
count = sum(1 for ch in s.lower() if ch in 'aeiou')
print(count)  # 3
