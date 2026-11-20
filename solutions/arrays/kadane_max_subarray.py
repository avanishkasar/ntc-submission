"""Maximum subarray sum using Kadane's algorithm — O(n) time, O(1) space."""


def max_subarray(nums: list[int]) -> int:
    best = current = nums[0]
    for x in nums[1:]:
        current = max(x, current + x)
        best = max(best, current)
    return best


def max_subarray_with_indices(nums: list[int]) -> tuple[int, int, int]:
    best = current = nums[0]
    start = end = temp_start = 0
    for i in range(1, len(nums)):
        if nums[i] > current + nums[i]:
            current = nums[i]
            temp_start = i
        else:
            current += nums[i]
        if current > best:
            best = current
            start, end = temp_start, i
    return best, start, end


if __name__ == "__main__":
    assert max_subarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) == 6
    s, l, r = max_subarray_with_indices([-2, 1, -3, 4, -1, 2, 1, -5, 4])
    assert s == 6 and l == 3 and r == 6
    print("kadane: all tests passed")
