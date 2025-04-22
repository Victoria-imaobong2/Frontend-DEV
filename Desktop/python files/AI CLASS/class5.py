from collections import deque

graph = {
    'A':['B','C'],
    'B':['A','D','E'],
    'C':['A','F'],
    'D':['B'],
    'E':['B','F'],
    'F':['C','E']
}

def bfs(graph,start):
    visited = set()
    queue = deque([start])