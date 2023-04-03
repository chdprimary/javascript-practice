"""
Given an array of integers nums and an integer target, return indices of the
two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not
use the same element twice.

You can return the answer in any order.
"""

# This is a classic two pointer (i, j) problem.
# However, this is just a brute force solution.
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i, num1 in enumerate(nums):
            for j, num2 in enumerate(nums[i+1:]):
                j += (i+1)
                if num1 + num2 == target:
                    return i, j


# With print debugging:
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        for i, num1 in enumerate(nums):
            print(f'{i}:{num1} + ...')
            for j, num2 in enumerate(nums[i+1:]):
                j += (i+1)
                print(f'\t{j}:{num2}')
                if num1 + num2 == target:
                    print(f'Found {num1} + {num2} == {target}, returning {i}, {j}')
                    return i, j
