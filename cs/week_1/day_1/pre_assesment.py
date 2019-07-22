#!/bin/python3

import math
import os
import random
import re
import sys


#
# Complete the 'largestMatrix' function below.
#
# The function is expected to return an INTEGER.
# The function accepts 2D_INTEGER_ARRAY arr as parameter.
#

# is_all_ones determines if 2d array arr has a square of ones with arr[x][y] as the top corner with size size
def is_all_ones(arr, x, y, size, prev_size):
    if x+size == len(arr) + 1:
        # print(1)
        return False
    if y+size == len(arr) + 1:
        # print(2)
        return False
    for i in range(x+prev_size, x+size): # x+prev_size, x+prev_size + 1, x+prev_size
        for j in range(y+prev_size, y+size):
            if arr[i][j] == 0:
                # print(3)
                return False
    return True


def largestMatrix(arr):
    # Write your code here
    largest_len = 0
    # look for top left corner of a square
    # print(is_all_ones(arr,0,1,2,1))
    # print("hi")
    for i in range(len(arr)):
        for j in range(len(arr)):
            if (arr[i][j] == 1):
                cur_len = 1
                while is_all_ones(arr, i, j, cur_len+1, cur_len):
                    cur_len += 1
                    #print("cur_len= ",cur_len, "i=", i, "j=",j)
                if cur_len > largest_len:
                    largest_len = cur_len
    return largest_len


if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    arr_rows = int(input().strip())
    arr_columns = int(input().strip())

    arr = []

    for _ in range(arr_rows):
        arr.append(list(map(int, input().rstrip().split())))

    result = largestMatrix(arr)

    fptr.write(str(result) + '\n')

    fptr.close()
