"""House robber — DP O(n) time O(1) space."""


def rob(nums: list[int]) -> int:
    if not nums:
        return 0
    if len(nums) == 1:
        return nums[0]
    prev2, prev1 = 0, 0
    for val in nums:
        curr = max(prev1, prev2 + val)
        prev2, prev1 = prev1, curr
    return prev1


if __name__ == "__main__":
    assert rob([1, 2, 3, 1]) == 4
    assert rob([2, 7, 9, 3, 1]) == 12
    assert rob([2, 1, 1, 2]) == 4
    print("house_robber: passed")
