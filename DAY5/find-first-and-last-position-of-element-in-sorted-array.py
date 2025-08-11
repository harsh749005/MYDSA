class Solution(object):
    def searchRange(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        indexarr = []
        for i in range(len(nums)):
            if nums[i] == target:
                indexarr.append(i)
        if not indexarr:
            return [-1, -1]
        else:
            return [indexarr[0], indexarr[-1]]
nums = [5,7,7,8,8,8,10]
print(Solution().searchRange(nums,8))