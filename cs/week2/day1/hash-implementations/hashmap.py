class MyHashMap:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.data = []
        for i in range(10_000):
            self.data.append([])

    def put(self, key: int, value: int) -> None:
        """
        value will always be non-negative.
        """
        entry = (key, value)
        index = key % 10_000

        for i in range(len(self.data[index])):
            if key == self.data[index][i][0]:
                self.data[index].pop(i)
                break

        self.data[index].append(entry)

    def get(self, key: int) -> int:
        """
        Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
        """
        index = key % 10_000
        position = self.data[index]
        for i in range(len(position)):
            if position[i][0] == key:
                return position[i][1]

        return -1

    def remove(self, key: int) -> None:
        """
        Removes the mapping of the specified value key if this map contains a mapping for the key
        """
        index = key % 10_000
        position = self.data[index]
        for i in range(len(position)):
            self.data[index].pop(i)
            return


# Your MyHashMap object will be instantiated and called as such:
# obj = MyHashMap()
# obj.put(key,value)
# param_2 = obj.get(key)
# obj.remove(key)
