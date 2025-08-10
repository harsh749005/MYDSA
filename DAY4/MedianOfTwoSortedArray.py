class Solution(object):
    def findMedianSortedArrays(self, nums1, nums2):
        merged = sorted(nums1 + nums2)  # Merge and sort
        n = len(merged)
        mid = n//2
        return float(merged[mid] if n%2!=0 else (merged[n//2-1]+merged[n//2])/2.0)
    
nums1 = [12,45,67]
nums2 = [67,3,56,8]
print(Solution().findMedianSortedArrays(nums1,nums2))