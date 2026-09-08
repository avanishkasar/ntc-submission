# Practice commit 14
# Topic: went over while loop termination conditions

d = {}
for ch in 'aabbcc':
    d[ch] = d.get(ch, 0) + 1
print(d)
