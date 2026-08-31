# Practice — commit 10
# Topic: studied list.append() and list.extend()
# Time: 09-53-33 UTC

stk = []
for ch in '({[]})':
    if ch in '({[':
        stk.append(ch)
    else:
        stk.pop()
print(len(stk) == 0)
