class Solution {
public:
    string multiplyString(int num, string s) {
        string k;
        for (int i = 0; i < num; ++i) {
            k+=s;
        }
        return k;
    }
    string decodeString(string s) {
        if (s == "") return "";
        vector<string> num_stack {""};
        vector<string> let_stack {""};
        for (auto c : s) {
            if (isdigit(c)) {
                num_stack.back().append(string(1,c));
            } else if (isalpha(c)) {
                let_stack.back().append(string(1,c));
            } else if (c == '[') {
                let_stack.push_back("");
                num_stack.push_back("");
            } else if (c ==']') {
                num_stack.pop_back();
                int num = stoi(num_stack.back());
                num_stack.pop_back();
                num_stack.push_back("");
                string cur = let_stack.back();
                let_stack.pop_back();
                cur = multiplyString(num,cur);
                let_stack.back().append(cur);
                
            }
        }
        return let_stack.back();
    }
};