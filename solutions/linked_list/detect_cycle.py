"""Detect cycle in linked list — Floyd's tortoise and hare O(n)/O(1)."""


class ListNode:
    def __init__(self, val=0, nxt=None):
        self.val = val
        self.next = nxt


def has_cycle(head: ListNode | None) -> bool:
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow is fast:
            return True
    return False


def find_cycle_start(head: ListNode | None) -> ListNode | None:
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow is fast:
            finder = head
            while finder is not slow:
                finder = finder.next
                slow = slow.next
            return finder
    return None


if __name__ == "__main__":
    a, b, c = ListNode(1), ListNode(2), ListNode(3)
    a.next, b.next, c.next = b, c, b
    assert has_cycle(a)
    assert find_cycle_start(a) is b
    print("detect_cycle: passed")
