#include <unordered_set>
#include <algorithm>


bool str_compare(char x, char y) {
    return x > y;
} 

class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        unordered_map<string, vector<string>> map;
        for (const auto& str : strs) {
            string s = str;
            sort(s.begin(), s.end(), str_compare);
            if (map.count(s) == 0) {
                pair<string, vector<string>> entry;
                entry = make_pair(s, vector<string>(1,str));
                map.insert(entry);
            } else {
                map[s].push_back(str);
            }
        }
        vector<vector<string>> result;
        for (const auto& e: map) {
            result.push_back(e.second);
        }
        return result;
    }
};