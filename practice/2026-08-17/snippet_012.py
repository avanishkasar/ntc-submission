# Practice — commit 12
# Topic: practiced breaking problems into smaller steps before coding
# Time: 05-32-43 UTC

d = {}
for ch in 'aabbcc':
    d[ch] = d.get(ch, 0) + 1
print(d)
