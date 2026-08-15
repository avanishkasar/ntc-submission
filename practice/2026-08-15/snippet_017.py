# Practice — commit 17
# Topic: revised return vs print — key difference in functions
# Time: 05-22-19 UTC

s = 'hello world'
count = sum(1 for ch in s.lower() if ch in 'aeiou')
print(count)  # 3
