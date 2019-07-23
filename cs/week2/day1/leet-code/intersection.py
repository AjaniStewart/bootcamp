# i will write the rest of the leetcode solutions in c++
class Solution:
    def intersection(self, nums1: list, nums2: list) -> list:
        s1 = set()
        s2 = set()

        for i in nums1:
            s1.add(i)

        for i in nums2:
            s2.add(i)

        longer, shorter = None, None
        if (len(s1) > len(s2)):
            longer = s1
            shorter = s2
        else:
            shorter = s1
            longer = s2

        common = []
        for k in longer:
            if k in shorter:
                common.append(k)
        return common
