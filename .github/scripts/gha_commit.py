"""
GitHub Actions Auto-Commit Script
-----------------------------------
Runs inside GitHub's cloud servers daily.
Each commit writes unique content to a unique file.
Each commit is pushed individually so every one counts on the contribution graph.
"""

import subprocess
import random
import os
import datetime
import time

def git(args):
    result = subprocess.run(
        ["git"] + args,
        capture_output=True, text=True
    )
    return result.stdout.strip(), result.stderr.strip(), result.returncode

def log(msg):
    ts = datetime.datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S UTC")
    print(f"[{ts}] {msg}", flush=True)

def write_file(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)

# ── Content pools ──────────────────────────────────────────────────────────────

STUDY_MESSAGES = [
    "reviewed if/else conditions and edge cases",
    "practiced modulo operator — divisibility checks",
    "revised loop logic — for vs while differences",
    "studied string slicing and reversal tricks in Python",
    "went over list vs set — when to use which",
    "practiced sorted() and how it works on strings",
    "revised f-strings and string formatting",
    "reviewed int() and str() type conversions",
    "practiced range() with start, stop, and step",
    "went over while loop termination conditions",
    "studied list.append() and list.extend()",
    "revised integer division // vs true division /",
    "practiced reading LeetCode problem statements carefully",
    "revised return vs print — key difference in functions",
    "practiced breaking problems into smaller steps before coding",
    "reviewed nested loops — multiplication table practice",
    "studied how Python handles negative numbers in modulo",
    "practiced digit extraction: n % 10 gives last digit",
    "went over prime number checking logic step by step",
    "studied how sorted() on a string works character by character",
    "practiced set operations — union, intersection, difference",
    "revised boolean logic — True, False, and, or, not",
    "went over how range() generates sequences",
    "practiced constructing dictionaries from scratch",
    "studied enumerate() — loop with index and value together",
    "reviewed two-pointer technique basics",
    "practiced sliding window problems",
    "studied binary search — how it halves the search space",
    "revised recursion — base case and recursive case",
    "practiced stack-based problem solving",
    "studied hash maps for O(1) lookups",
    "practiced linked list traversal",
    "revised BFS and DFS difference",
    "studied time complexity — O(n) vs O(log n) vs O(n²)",
    "practiced greedy algorithm thinking",
    "revised dynamic programming — overlapping subproblems",
    "studied how Python dicts handle collisions",
    "practiced writing clean helper functions",
    "revised edge cases — empty input, single element, negatives",
    "studied in-place vs extra space solutions",
]

SNIPPETS = [
    "n = 10\ntotal = 0\nfor i in range(1, n + 1):\n    total += i\nprint(total)  # 55",
    "n = 1234\nresult = 0\nwhile n > 0:\n    result += n % 10\n    n //= 10\nprint(result)  # 10",
    "n = 12345\nrev = 0\nwhile n > 0:\n    rev = rev * 10 + n % 10\n    n //= 10\nprint(rev)  # 54321",
    "s = 'hello world'\ncount = sum(1 for ch in s.lower() if ch in 'aeiou')\nprint(count)  # 3",
    "n = 7\nresult = 1\nfor i in range(1, n + 1):\n    result *= i\nprint(result)  # 5040",
    "n = 17\nis_prime = n > 1 and all(n % i != 0 for i in range(2, int(n**0.5) + 1))\nprint(is_prime)  # True",
    "a, b = 0, 1\nfor _ in range(10):\n    print(a, end=' ')\n    a, b = b, a + b",
    "word = 'racecar'\nprint(word == word[::-1])  # True — palindrome",
    "arr = [64, 34, 25, 12, 22]\nprint(sorted(arr))  # ascending",
    "nums = [2, 4, 6, 8, 10]\nprint(list(filter(lambda x: x % 4 == 0, nums)))",
    "matrix = [[1,2],[3,4]]\nfor row in matrix:\n    print(row)",
    "d = {}\nfor ch in 'aabbcc':\n    d[ch] = d.get(ch, 0) + 1\nprint(d)",
    "stk = []\nfor ch in '({[]})':\n    if ch in '({[':\n        stk.append(ch)\n    else:\n        stk.pop()\nprint(len(stk) == 0)",
    "left, right = 0, 9\nwhile left < right:\n    mid = (left + right) // 2\n    print(mid)\n    left = mid + 1",
    "pairs = [(1,'a'),(2,'b'),(3,'c')]\nfor i, ch in pairs:\n    print(i, ch)",
    "nums = [3,1,4,1,5,9,2,6]\nprint(max(nums), min(nums), sum(nums))",
    "s = 'abcde'\nprint(s[::-1])  # edcba",
    "print([x**2 for x in range(1, 6)])  # [1, 4, 9, 16, 25]",
    "words = ['hello', 'world', 'python']\nprint(' '.join(words))",
    "n = 100\nfor i in range(1, n+1):\n    if i % 15 == 0: print('FizzBuzz')\n    elif i % 3 == 0: print('Fizz')\n    elif i % 5 == 0: print('Buzz')\n    else: print(i)",
    "# two sum brute force\nnums, target = [2,7,11,15], 9\nfor i in range(len(nums)):\n    for j in range(i+1, len(nums)):\n        if nums[i]+nums[j]==target:\n            print(i,j)",
    "# two sum hash map\nnums, target = [2,7,11,15], 9\nseen = {}\nfor i, n in enumerate(nums):\n    if target - n in seen:\n        print(seen[target-n], i)\n    seen[n] = i",
    "# binary search\narr, target = [1,3,5,7,9], 7\nl, r = 0, len(arr)-1\nwhile l <= r:\n    m = (l+r)//2\n    if arr[m]==target: print(m); break\n    elif arr[m]<target: l=m+1\n    else: r=m-1",
    "# count duplicates\nfrom collections import Counter\nnums = [1,1,2,3,3,3]\nprint(Counter(nums))",
    "# string anagram check\ns, t = 'anagram', 'nagaram'\nprint(sorted(s)==sorted(t))",
]

NOTES_ENTRIES = [
    "- `%` gives remainder. Use `== 0` to test divisibility.",
    "- `set()` auto-removes duplicates from any iterable.",
    "- `sorted()` returns a new list — original stays unchanged.",
    "- `len()` works on strings, lists, sets, tuples, dicts.",
    "- `while` loops need a condition that eventually turns False.",
    "- `for i in range(1, n+1)` counts 1 through n inclusive.",
    "- `str(x)` turns any number into text.",
    "- Only ONE block runs in if/elif/else — the first True one.",
    "- Indentation IS the structure in Python. Never optional.",
    "- `[::-1]` reverses a string or list instantly.",
    "- `return` sends a value out. `print` just displays it.",
    "- In LeetCode, always `return`, never `print`.",
    "- `n % 10` extracts the last digit of n.",
    "- `n // 10` removes the last digit of n.",
    "- Time complexity O(n) means one loop through the input.",
    "- O(n²) means a nested loop — usually too slow for large inputs.",
    "- O(log n) means binary search — fast!",
    "- Hash maps give O(1) average lookup. Use them often.",
    "- Two pointers: start from both ends and move inward.",
    "- Sliding window: expand right, shrink left.",
]

COMMIT_MSG_PREFIXES = [
    "study", "practice", "notes", "review", "learn",
    "progress", "session", "drill", "revise", "trace",
]


def pick_content(idx, date_str, time_str):
    """Generate unique content + file path + commit message for commit #idx."""
    roll = random.random()
    uid = f"{date_str}_{time_str}_{idx:03d}"

    if roll < 0.40:
        # Unique practice file per commit
        snippet = random.choice(SNIPPETS)
        topic = random.choice(STUDY_MESSAGES)
        file = f"practice/{date_str}/snippet_{idx:03d}.py"
        content = (
            f"# Practice — commit {idx}\n"
            f"# Topic: {topic}\n"
            f"# Time: {time_str} UTC\n\n"
            f"{snippet}\n"
        )
        msg = f"{random.choice(COMMIT_MSG_PREFIXES)}: {topic}"

    elif roll < 0.70:
        # Daily log entry per commit (appended to one file, unique lines)
        topic = random.choice(STUDY_MESSAGES)
        file = f"daily-log/{date_str}/log_{idx:03d}.md"
        content = (
            f"## Entry {idx}\n\n"
            f"- {topic}\n"
            f"- _time: {time_str} UTC_\n\n"
        )
        msg = f"log: {topic}"

    elif roll < 0.88:
        # Notes — unique note file per commit
        note = random.choice(NOTES_ENTRIES)
        file = f"notes/{date_str}/note_{idx:03d}.md"
        content = (
            f"## Quick Note — {time_str} UTC\n\n"
            f"{note}\n\n"
            f"_session: {idx}_\n"
        )
        msg = f"notes: python tip #{idx}"

    else:
        # Tracker entry
        file = f"progress/{date_str}/entry_{idx:03d}.md"
        content = (
            f"## Progress Entry {idx}\n\n"
            f"- Showing up. That's the whole plan.\n"
            f"- _time: {time_str} UTC_\n"
        )
        msg = f"progress: session entry {idx}"

    return file, content, msg


def run():
    log("=" * 50)
    log("Auto-commit engine started")

    now = datetime.datetime.utcnow()
    date_str = now.strftime("%Y-%m-%d")

    # 70% chance: 20-30 commits | 30% chance: 5-19 commits
    if random.random() < 0.70:
        num_commits = random.randint(20, 30)
    else:
        num_commits = random.randint(5, 19)

    log(f"Planning {num_commits} individual commit+push cycles today")

    success = 0
    for i in range(1, num_commits + 1):
        # Use a fresh timestamp for each commit so filenames are unique
        ts = datetime.datetime.utcnow()
        time_str = ts.strftime("%H-%M-%S")

        file, content, msg = pick_content(i, date_str, time_str)
        write_file(file, content)

        _, _, code = git(["add", file])
        if code != 0:
            log(f"  [!] add failed for {file}")
            continue

        _, err, code = git(["commit", "-m", msg])
        if code != 0:
            log(f"  [!] commit {i} failed: {err}")
            continue

        # Push every single commit individually
        _, err, code = git(["push", "origin", "main"])
        if code != 0:
            log(f"  [!] push {i} failed: {err}")
            continue

        log(f"  [{i}/{num_commits}] pushed: '{msg}'")
        success += 1

        # Small human-like delay between commits
        time.sleep(random.randint(2, 6))

    log(f"Done. {success}/{num_commits} commits pushed successfully.")
    log("=" * 50)


if __name__ == "__main__":
    run()
