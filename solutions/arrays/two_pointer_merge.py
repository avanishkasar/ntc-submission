"""Merge two sorted arrays in-place using two-pointer technique."""


def merge_sorted(nums1: list[int], m: int, nums2: list[int], n: int) -> None:
    p1, p2, write = m - 1, n - 1, m + n - 1
    while p2 >= 0:
        if p1 >= 0 and nums1[p1] > nums2[p2]:
            nums1[write] = nums1[p1]
            p1 -= 1
        else:
            nums1[write] = nums2[p2]
            p2 -= 1
        write -= 1


if __name__ == "__main__":
    a = [1, 3, 5, 0, 0, 0]
    merge_sorted(a, 3, [2, 4, 6], 3)
    assert a == [1, 2, 3, 4, 5, 6], f"Got {a}"
    print("merge_sorted: OK")
