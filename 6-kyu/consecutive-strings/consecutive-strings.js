function longestConsec(strarr, k) {
    if (k <= 0 || k > strarr.length || strarr.length === 0) return "";
​
    let maxLength = 0;
    let resultStr = "";
​
    for (let i = 0; i <= strarr.length - k; i++) {
        const elementsBreakdownStr = strarr.slice(i, i + k).join('')
        const elemLength = elementsBreakdownStr.length;
​
        if (elemLength > maxLength) {
            maxLength = elemLength;
            resultStr = elementsBreakdownStr;
        }
    }
    return resultStr
}