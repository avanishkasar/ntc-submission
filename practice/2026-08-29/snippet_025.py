# Practice — commit 25
# Topic: studied enumerate() — loop with index and value together
# Time: 11-30-14 UTC

d = {}
for ch in 'aabbcc':
    d[ch] = d.get(ch, 0) + 1
print(d)
