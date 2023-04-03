// Given an integer array nums, return true if any value appears at least twice
// in the array, and return false if every element is distinct.

const containsDuplicate = nums => (new Set(nums)).size !== nums.length
