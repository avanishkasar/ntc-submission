"""Generate all subsets — backtracking O(2^n)."""


def subsets(nums: list[int]) -> list[list[int]]:
    result = []

    def backtrack(start: int, current: list[int]) -> None:
        result.append(current[:])
        for i in range(start, len(nums)):
            current.append(nums[i])
            backtrack(i + 1, current)
            current.pop()

    backtrack(0, [])
    return result


if __name__ == "__main__":
    r = subsets([1, 2, 3])
    assert len(r) == 8
    assert [] in r
    assert [1, 2, 3] in r
    print("subsets: passed")
