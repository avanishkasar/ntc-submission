# Practice commit 19
# Topic: practiced stack-based problem solving

d = {}
for ch in 'aabbcc':
    d[ch] = d.get(ch, 0) + 1
print(d)
