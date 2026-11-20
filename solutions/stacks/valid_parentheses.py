"""Valid parentheses — stack-based bracket matching."""


def is_valid(s: str) -> bool:
    stack: list[str] = []
    pairs = {")": "(", "]": "[", "}": "{"}
    for ch in s:
        if ch in pairs:
            if not stack or stack[-1] != pairs[ch]:
                return False
            stack.pop()
        else:
            stack.append(ch)
    return len(stack) == 0


if __name__ == "__main__":
    assert is_valid("()")
    assert is_valid("()[]{}")
    assert not is_valid("(]")
    assert is_valid("{[]}")
    assert not is_valid("([)]")
    print("valid_parentheses: passed")
