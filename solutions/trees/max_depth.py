"""Maximum depth of binary tree — recursive DFS."""


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def max_depth(root: TreeNode | None) -> int:
    if not root:
        return 0
    return 1 + max(max_depth(root.left), max_depth(root.right))


def max_depth_iterative(root: TreeNode | None) -> int:
    if not root:
        return 0
    from collections import deque
    queue = deque([(root, 1)])
    depth = 0
    while queue:
        node, d = queue.popleft()
        depth = max(depth, d)
        if node.left:
            queue.append((node.left, d + 1))
        if node.right:
            queue.append((node.right, d + 1))
    return depth


if __name__ == "__main__":
    tree = TreeNode(3, TreeNode(9), TreeNode(20, TreeNode(15), TreeNode(7)))
    assert max_depth(tree) == 3
    assert max_depth_iterative(tree) == 3
    print("max_depth: passed")
