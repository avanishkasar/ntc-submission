# Practice commit 11
# Topic: revised f-strings and string formatting

s = 'hello world'
count = sum(1 for c in s.lower() if c in 'aeiou')
print(count)
