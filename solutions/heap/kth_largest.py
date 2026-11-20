"""Kth largest element — min-heap of size k, O(n log k)."""
import heapq


def find_kth_largest(nums: list[int], k: int) -> int:
    heap = nums[:k]
    heapq.heapify(heap)
    for val in nums[k:]:
        if val > heap[0]:
            heapq.heapreplace(heap, val)
    return heap[0]


if __name__ == "__main__":
    assert find_kth_largest([3, 2, 1, 5, 6, 4], 2) == 5
    assert find_kth_largest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4) == 4
    print("kth_largest: passed")
