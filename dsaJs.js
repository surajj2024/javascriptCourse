/* var removeDuplicates = function (S) {
    let stack = [];

    for (let char of S) {
        if (stack[stack.length - 1] === char) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }

    return stack.join("");
}; */

//SECTION - Valid Anagram
/*var isAnagram = function  (s, t) {
    var lenA = s.length;
    var lenB = t.length;
    var map = {};

    if (lenA !== lenB) return false;

    for (var i = 0; i < lenA; i++) {
        if (!map[s[i]]) map[s[i]] = 0;
        map[s[i]]++;
    }

    for (var j = 0; j < lenB; j++) {
        if (!map[t[j]]) return false;
        map[t[j]]--;
    }

    return true;
}; */

//SECTION - Decode String

// var decodeString = function (s) {
//     const stack = []
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === ']') {
//             let pattern = ''
//             let c = stack.pop()
//             while (c !== '[') {
//                 pattern = c + pattern
//                 c = stack.pop()
//             }
//             let numStr = ''
//             let num = stack.pop()
//             while (/[0-9]/.test(num)) {
//                 numStr = num + numStr
//                 num = stack.pop()
//             }
//             stack.push(num)
//             let str = ''
//             for (let j = 0; j < parseInt(numStr, 10); j++) {
//                 str += pattern
//             }
//             stack.push(str)
//         } else {
//             stack.push(s[i])
//         }
//     }
//     return stack.join('')
// };