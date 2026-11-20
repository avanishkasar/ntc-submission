"""BFS shortest path — unweighted graph O(V+E)."""
from collections import deque


def bfs_shortest(graph: dict[int, list[int]], start: int, end: int) -> int:
    if start == end:
        return 0
    visited = {start}
    queue = deque([(start, 0)])
    while queue:
        node, dist = queue.popleft()
        for neighbor in graph.get(node, []):
            if neighbor == end:
                return dist + 1
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append((neighbor, dist + 1))
    return -1


if __name__ == "__main__":
    g = {0: [1, 2], 1: [0, 3], 2: [0, 3], 3: [1, 2, 4], 4: [3]}
    assert bfs_shortest(g, 0, 4) == 3
    assert bfs_shortest(g, 0, 0) == 0
    print("bfs_shortest: passed")
