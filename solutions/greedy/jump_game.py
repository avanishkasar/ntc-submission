"""Jump game — greedy O(n) track farthest reachable index."""


def can_jump(nums: list[int]) -> bool:
    farthest = 0
    for i in range(len(nums)):
        if i > farthest:
            return False
        farthest = max(farthest, i + nums[i])
    return True


if __name__ == "__main__":
    assert can_jump([2, 3, 1, 1, 4])
    assert not can_jump([3, 2, 1, 0, 4])
    assert can_jump([0])
    print("jump_game: passed")
