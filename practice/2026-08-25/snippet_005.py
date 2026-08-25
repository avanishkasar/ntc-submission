# Practice — commit 5
# Topic: practiced constructing dictionaries from scratch
# Time: 05-28-33 UTC

d = {}
for ch in 'aabbcc':
    d[ch] = d.get(ch, 0) + 1
print(d)
