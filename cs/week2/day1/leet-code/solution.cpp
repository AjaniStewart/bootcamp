#include <unordered_set>
#include <utility>

using namespace std;

class Solution
{
public:
  vector<int> intersection(vector<int> &nums1, vector<int> &nums2)
  {
    unordered_set<int> set;

    if (nums1.size() < nums2.size())
      swap(nums1, nums2);

    for (auto &num : nums1)
    {
      set.insert(num);
    }

    unordered_set<int> set2;
    for (auto &num : nums2)
    {
      if (set.count(num))
      {
        set2.insert(num);
      }
    }
    vector<int> v;
    for (auto &e : set2)
    {
      v.push_back(e);
    }
    return v;
  }
};