# Practice — commit 21
# Topic: revised f-strings and string formatting
# Time: 09-54-34 UTC

d = {}
for ch in 'aabbcc':
    d[ch] = d.get(ch, 0) + 1
print(d)
