"""Sliding window maximum — O(n) using monotonic deque."""
from collections import deque


def max_sliding_window(nums: list[int], k: int) -> list[int]:
    dq: deque[int] = deque()
    result = []
    for i, val in enumerate(nums):
        while dq and dq[0] < i - k + 1:
            dq.popleft()
        while dq and nums[dq[-1]] < val:
            dq.pop()
        dq.append(i)
        if i >= k - 1:
            result.append(nums[dq[0]])
    return result


if __name__ == "__main__":
    assert max_sliding_window([1, 3, -1, -3, 5, 3, 6, 7], 3) == [3, 3, 5, 5, 6, 7]
    assert max_sliding_window([1], 1) == [1]
    print("sliding_window_max: passed")
