class MyHashSet:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.data = []
        for i in range(100000):
            self.data.append([])

    def add(self, key: int) -> None:
        index = key % 100000
        for i in range(len(self.data[index])):
            if self.data[index][i] == key:
                return
        self.data[index].append(key)

    def remove(self, key: int) -> None:
        index = key % 100000
        try:
            self.data[index].remove(key)
        except:
            return

    def contains(self, key: int) -> bool:
        """
        Returns true if this set contains the specified element
        """
        index = key % 100000
        for i in range(len(self.data[index])):
            if self.data[index][i] == key:
                return True
        return False


# Your MyHashSet object will be instantiated and called as such:
# obj = MyHashSet()
# obj.add(key)
# obj.remove(key)
# param_3 = obj.contains(key)
