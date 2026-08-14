# Practice — commit 17
# Topic: revised f-strings and string formatting
# Time: 06-12-21 UTC

s = 'hello world'
count = sum(1 for ch in s.lower() if ch in 'aeiou')
print(count)  # 3
