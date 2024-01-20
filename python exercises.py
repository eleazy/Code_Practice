import os
import sys
import math
import random
import time
import datetime
import json
import csv
import re
import urllib

""" https://www.codewars.com/kata/59031db02b0070a923000110/ """
""" f = lambda n, s: [max(i, key=i.count) for i in zip(*s)]
os.system("cls")
a = [[1, 0, 1, 0, 1], [1, 0, 1, 0, 1], [0, 1, 0, 1, 0]]

print(f(3, a)) """


""" https: // www.codewars.com/kata/575fa9afee048b293e000287/python """
""" def how_much_water(water, load, clothes):
    if clothes < load:
        return "Not enough clothes"
    if clothes == load:
        return water
    if clothes > load:
        if clothes > 2 * load:
            return "Too much clothes"
    n = pow(1.1, clothes - load)
    return round((water * n), 2)

os.system("cls")
print(how_much_water(10, 11, 20)) """


""" https://www.codewars.com/kata/599febdc3f64cd21d8000117 """
""" def numbers_of_letters(n):
    if n == 4:
        return ["four"]
    numWord = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    }
    numPhraseArr = []

    numArr = [int(d) for d in str(n)]

    while True:
        numPhrase = ""
        for i in numArr:
            numPhrase += numWord[i]
        numPhraseArr.append(numPhrase)
        numArr = [int(d) for d in str(len(numPhrase))]
        if numArr[0] == 4:
            break

    numPhraseArr.append("four")
    return numPhraseArr

os.system("cls")
print(numbers_of_letters(999)) """
