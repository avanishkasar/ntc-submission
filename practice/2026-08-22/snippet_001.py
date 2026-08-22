# Practice — commit 1
# Topic: practiced sliding window problems
# Time: 05-23-07 UTC

stk = []
for ch in '({[]})':
    if ch in '({[':
        stk.append(ch)
    else:
        stk.pop()
print(len(stk) == 0)
