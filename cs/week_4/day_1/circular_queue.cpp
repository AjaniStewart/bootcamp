#include <vector>

using namespace std;

class MyCircularQueue {
    
private:
    vector<int> data;
    int frontIndex;
    int backIndex;
    int current_size;
    int size;
public:
    /** Initialize your data structure here. Set the size of the queue to be k. */
    MyCircularQueue(int k) {
        data.reserve(k);
        frontIndex = 0;
        backIndex = k-1;
        current_size = 0;
        size = k;
    }
    
    /** Insert an element into the circular queue. Return true if the operation is successful. */
    bool enQueue(int value) {
        if (current_size == size) { return false; }
        int index = (backIndex + 1) % size;
        data[index] = value;
        backIndex = index;
        current_size++;
        return true;
        
    }
    
    /** Delete an element from the circular queue. Return true if the operation is successful. */
    bool deQueue() {
        if (current_size == 0) { return false; }
        if (frontIndex == size - 1) {
            frontIndex = 0;
        } else {
            frontIndex++;
        }
        current_size--;
        return true;
    }
    
    /** Get the front item from the queue. */
    int Front() {
        if (current_size == 0) {
            return -1;
        }
        return data[frontIndex];
    }
    
    /** Get the last item from the queue. */
    int Rear() {
        if (current_size == 0) {
            return -1;
        }
        return data[backIndex];
    }
    
    /** Checks whether the circular queue is empty or not. */
    bool isEmpty() {
        return current_size == 0;
    }
    
    /** Checks whether the circular queue is full or not. */
    bool isFull() {
        return current_size == size;
    }
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * MyCircularQueue* obj = new MyCircularQueue(k);
 * bool param_1 = obj->enQueue(value);
 * bool param_2 = obj->deQueue();
 * int param_3 = obj->Front();
 * int param_4 = obj->Rear();
 * bool param_5 = obj->isEmpty();
 * bool param_6 = obj->isFull();
 */