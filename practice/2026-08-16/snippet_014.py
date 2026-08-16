# Practice — commit 14
# Topic: studied in-place vs extra space solutions
# Time: 05-25-05 UTC

stk = []
for ch in '({[]})':
    if ch in '({[':
        stk.append(ch)
    else:
        stk.pop()
print(len(stk) == 0)
