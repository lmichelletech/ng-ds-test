// 8. What are the four main steps of mergesort?

Divide and Conquer

a) Recognize base case
b) Divide: Break problem down during each call
c) Conquer: Do work on each subset
d) Combine: solutions
-------------------------------------------
a) Find the midway position of the list.
b) Create a left side list from this midpoint and a right side list from this midpoint.
   Continue dividing the unsorted lists until there are n sublists containing one element each.

b) Recursively sort the two elements by comparing each element and swapping when necessary.

c) Merge the sorted sides into one list again by sorting while merging. 