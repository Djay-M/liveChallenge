"""
## 📌 Task: **Problem Statement: Minimum Cost to Connect All Points**
**Description:** You are given a set of points on a 2D plane.
Each point is represented as a pair of integers (x, y).
The cost of connecting two points (x1, y1) and (x2, y2) is defined as the Manhattan distance between them: |x1 - x2| + |y1 - y2|.
Your task is to find the minimum cost to connect all points with each other, such that every point is connected to at least one other point.
You can assume that there are no duplicate points.
**Input:** A list of points represented as pairs of integers [(x1, y1), (x2, y2), ..., (xn, yn)].
**Output:** Return the minimum cost to connect all the points.\
**Constraints:**
1 <= points.length <= 1000
10^6 <= xi, yi <= 10^6
All pairs (xi, yi) are distinct.

Example:
Input: = [(0,0), (2,2), (3,10), (5,2), (7,0)]
Output: 20
Explanation:
Here's one possible way to connect the points with the minimum cost:

1. Connect (0,0) and (2,2) with a cost of 4 (|0-2| + |0-2|).
2. Connect (2,2) and (5,2) with a cost of 3 (|2-5| + |2-2|).
3. Connect (5,2) and (7,0) with a cost of 4 (|5-7| + |2-0|).
4. Connect (2,2) and (3,10) with a cost of 9 (|2-3| + |2-10|).

The total cost is 4 + 3 + 4 + 9 = 20.
Note that there may be other ways to connect the points with the same minimum cost.
"""

# so it is garph problem, DFS or BFS use djastra
# brute froce

# Params: arr[(x, y) ...]
# returns the minCost to connect all points
def connectPoints(arr):
    costArr = [float("inf")] * len(arr)
    costArr[0] = 0
    visitedIndexs = set()
    curLowestIndex = 0

    while len(visitedIndexs) < len(arr) - 1 and curLowestIndex < len(arr):
        x, y = arr[curLowestIndex]
        visitedIndexs.add(curLowestIndex)
        nextLowestVal = float("inf")
        nextLowestIndex = len(arr)
        
        for index in range(len(arr)):
            if curLowestIndex == index or index in visitedIndexs:
                continue
            x1, y1 = arr[index]

            dist = abs(x - x1) + abs(y - y1)
            costArr[index] = min(costArr[index], dist)

            # need to update curLowestIndex
            if index not in visitedIndexs and dist < nextLowestVal:
                nextLowestVal = dist
                nextLowestIndex = index
        curLowestIndex = nextLowestIndex
    return sum(costArr)



# Driver code
inputArr = [(0,0), (2,2), (3,10), (5,2), (7,0)]
minCost = connectPoints(inputArr)
print(f"The mincost to connect all the points in {minCost}")


# [(0,0), (2,2), (3,10), (5,2), (7,0)], visited = ()
# [0, 4, 13, 7, 7] --> selected is (0, 0), visited = ((0, 0))
# [0, 4, 9, 3, 7] --> selected is (2, 2), because in the above arr 4 was lowest, visited = ((0, 0), (2, 2))
# [0, 4, 9, 3, 4] --> selected is (5, 2), because in the above arr 3 was lowest, visited = ((0, 0), (2, 2), (5, 2))
# [0, 4, 9, 3, 4] --> selected is (7, 0), because in the above arr 4 was lowest, visited = ((0, 0), (2, 2), (5, 2), (7, 0))

