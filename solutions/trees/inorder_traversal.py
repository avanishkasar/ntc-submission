"""Binary tree inorder traversal — iterative with explicit stack."""


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def inorder(root: TreeNode | None) -> list[int]:
    result = []
    stack: list[TreeNode] = []
    curr = root
    while curr or stack:
        while curr:
            stack.append(curr)
            curr = curr.left
        curr = stack.pop()
        result.append(curr.val)
        curr = curr.right
    return result


if __name__ == "__main__":
    tree = TreeNode(1, None, TreeNode(2, TreeNode(3)))
    assert inorder(tree) == [1, 3, 2]
    print("inorder_traversal: passed")
