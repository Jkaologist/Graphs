Graphs can have cycles where nodes can be traversed back to the same node in the graph

When building a graph from a series of edges, if a graph is undirected you must make sure each node pair has the reciprocal node pairing in their adjacencies

The solution is to mark nodes as visited
A good way to track visited nodes is with a set

checking and marking visited nodes avoids infinite loops in cyclic graphs