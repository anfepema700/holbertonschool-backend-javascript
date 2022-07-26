export default function appendToEachArrayValue(array, appendString) {
    const newArray = [];
    for (const [idx, value] of array.entires()) {
        newArray[idx] = appendString + value;
    }
    return newArray;
}