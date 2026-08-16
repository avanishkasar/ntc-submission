# Practice — commit 1
# Topic: studied how Python handles negative numbers in modulo
# Time: 05-23-48 UTC

d = {}
for ch in 'aabbcc':
    d[ch] = d.get(ch, 0) + 1
print(d)
