"""Quicksort — Lomuto partition, in-place, average O(n log n)."""
import random


def quicksort(arr: list[int], lo: int = 0, hi: int | None = None) -> None:
    if hi is None:
        hi = len(arr) - 1
    if lo < hi:
        pivot = _partition(arr, lo, hi)
        quicksort(arr, lo, pivot - 1)
        quicksort(arr, pivot + 1, hi)


def _partition(arr: list[int], lo: int, hi: int) -> int:
    ri = random.randint(lo, hi)
    arr[ri], arr[hi] = arr[hi], arr[ri]
    pivot = arr[hi]
    i = lo
    for j in range(lo, hi):
        if arr[j] < pivot:
            arr[i], arr[j] = arr[j], arr[i]
            i += 1
    arr[i], arr[hi] = arr[hi], arr[i]
    return i


if __name__ == "__main__":
    a = [10, 7, 8, 9, 1, 5]
    quicksort(a)
    assert a == [1, 5, 7, 8, 9, 10]
    print("quicksort: passed")
