"use strict";
//This file contains useful functions for calculations etc
function ranInt(begin, end, howMany, repeatNumbers, except) {
    if (!Number.isInteger(begin) || !Number.isInteger(end) || !Number.isInteger(howMany)) {
        throw "Provided values are not integers";
    }
    else {
        if (end < begin)
            throw "End is smaller than begin";
        if (repeatNumbers == undefined)
            repeatNumbers = false;
        if (howMany < 1) {
            throw "Provided amount is less than 0";
        }
        else {
            if (howMany == 1) {
                let result = [];
                result[0] = Math.floor(Math.random() * (end - begin + 1)) + begin;
                return result;
            }
            else {
                let result = [];
                if (repeatNumbers) {
                    for (let k = 0; k < howMany; k++) {
                        result[k] = Math.floor(Math.random() * (end - begin + 1)) + begin;
                    }
                    return result;
                }
                else {
                    if (howMany > (((end - begin) + 1)))
                        throw "Can't return " + howMany + " ints. Range is " + begin + " to " + end;
                    let allPossibilities = [];
                    for (let m = 0; m <= (end - begin); m++) {
                        let exception = false;
                        if (typeof except != undefined) {
                            for (let ex = 0; ex < except.length; ex++) {
                                if (except[ex] == (begin + m)) {
                                    exception = true;
                                }
                            }
                        }
                        if (exception) {
                            continue;
                        }
                        allPossibilities[m] = begin + m;
                    }
                    allPossibilities = allPossibilities.filter(item => item);
                    for (let p = 0; p < howMany; p++) {
                        let temp = Math.floor(Math.random() * allPossibilities.length);
                        result[p] = allPossibilities[temp];
                        allPossibilities.splice(temp, 1);
                    }
                    return result;
                }
            }
        }
    }
}
function placeIntIn2D(input, rows, columns) {
    let output = [];
    for (let q = 1; q <= rows; q++) {
        for (let w = 1; w <= columns; w++) {
            if (((q - 1) * columns + w) == input)
                return output = [q - 1, w - 1];
        }
    }
    return output;
}
