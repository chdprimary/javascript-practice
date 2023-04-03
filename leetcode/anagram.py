# Given two strings s and t, return true if t is an anagram of s, and false otherwise.

# An Anagram is a word or phrase formed by rearranging the letters of a
# different word or phrase, typically using all the original letters exactly
# once.

# I came up with all the below solutions in one attempt. 


from collections import Counter

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        return Counter(s) == Counter(t)

# class Solution:
#     def isAnagram(self, s: str, t: str) -> bool:
#         return sorted(s) == sorted(t)

# class Solution:
#     def isAnagram(self, s: str, t: str) -> bool:
#         d1 = {c: s.count(c) for c in s}
#         d2 = {c: t.count(c) for c in t}
#         return d1 == d2

# class Solution:
#     def isAnagram(self, s: str, t: str) -> bool:
#         d1 = {}
#         d2 = {}
#         for c in s:
#             d1.setdefault(c, 0)
#             d1[c] += 1
#         for c in t:
#             d2.setdefault(c, 0)
#             d2[c] += 1
#         return d1 == d2
