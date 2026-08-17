# Practice — commit 13
# Topic: studied string slicing and reversal tricks in Python
# Time: 05-32-47 UTC

s = 'hello world'
count = sum(1 for ch in s.lower() if ch in 'aeiou')
print(count)  # 3
