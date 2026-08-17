# Practice — commit 10
# Topic: studied enumerate() — loop with index and value together
# Time: 05-32-32 UTC

s = 'hello world'
count = sum(1 for ch in s.lower() if ch in 'aeiou')
print(count)  # 3
