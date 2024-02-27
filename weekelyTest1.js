// function reverseString(str) {
//     let reversed = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed;
// }

// // Example usage:
// const originalString = "Hello, world!";
// const reversedString = reverseString(originalString);
// console.log(reversedString); // Outputs: "!dlrow ,olleH"

// function areAnagrams(str1, str2) {
//     // Remove non-alphanumeric characters and convert to lowercase
//     const cleanStr1 = str1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//     const cleanStr2 = str2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

//     // Check if the lengths of the strings are different
//     if (cleanStr1.length !== cleanStr2.length) {
//         return false;
//     }

//     // Create character frequency maps for both strings
//     const frequencyMap1 = {};
//     const frequencyMap2 = {};

//     // Populate frequency map for string 1
//     for (let char of cleanStr1) {
//         frequencyMap1[char] = (frequencyMap1[char] || 0) + 1;
//     }

//     // Populate frequency map for string 2
//     for (let char of cleanStr2) {
//         frequencyMap2[char] = (frequencyMap2[char] || 0) + 1;
//     }

//     // Check if the frequency maps are equal
//     for (let char in frequencyMap1) {
//         if (frequencyMap1[char] !== frequencyMap2[char]) {
//             return false;
//         }
//     }

//     return true;
// }

// // Example usage:
// const str1 = "listen";
// const str2 = "silent";
// console.log(areAnagrams(str1, str2)); // Outputs: true

// function arrayIntersection(arr1, arr2) {
//     const intersection = [];

//     // Create a set from the first array for constant time lookup
//     const set = new Set(arr1);

//     // Iterate through the second array and check if each element exists in the set
//     for (let i = 0; i < arr2.length; i++) {
//         if (set.has(arr2[i])) {
//             intersection.push(arr2[i]);
//             // Remove the element from the set if you don't want duplicates in the intersection
//             // set.delete(arr2[i]);
//         }
//     }

//     return intersection;
// }

// // Example usage:
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [3, 4, 5, 6, 7];
// console.log(arrayIntersection(arr1, arr2)); // Outputs: [3, 4, 5]

// function isPalindrome(str) {
//     // Remove non-alphanumeric characters and convert to lowercase
//     const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

//     // Initialize pointers for the start and end of the string
//     let start = 0;
//     let end = cleanStr.length - 1;

//     // Check characters from start and end towards the middle
//     while (start < end) {
//         // If characters at start and end don't match, return false
//         if (cleanStr[start] !== cleanStr[end]) {
//             return false;
//         }
//         start++;
//         end--;
//     }

//     // If all characters match, it's a palindrome
//     return true;
// }

// // Example usage:
// const str = "A man, a plan, a canal, Panama!";
// console.log(isPalindrome(str)); // Outputs: true

// function rotateArrayRight(arr, positions) {
//     if (arr.length === 0) {
//         return arr;
//     }

//     const n = arr.length;
//     // Adjust positions if it's greater than array length
//     positions = positions % n;

//     // Reverse the entire array
//     reverseArray(arr, 0, n - 1);
//     // Reverse the elements from 0 to positions-1
//     reverseArray(arr, 0, positions - 1);
//     // Reverse the elements from positions to n-1
//     reverseArray(arr, positions, n - 1);

//     return arr;
// }

// function reverseArray(arr, start, end) {
//     while (start < end) {
//         const temp = arr[start];
//         arr[start] = arr[end];
//         arr[end] = temp;
//         start++;
//         end--;
//     }
// }

// // Example usage:
// const arr = [1, 2, 3, 4, 5];
// const positions = 2;
// console.log(rotateArrayRight(arr, positions)); // Outputs: [4, 5, 1, 2, 3]

// function compressString(str) {
//     let compressed = '';
//     let countConsecutive = 0;

//     for (let i = 0; i < str.length; i++) {
//         countConsecutive++;

//         // If next character is different than current, append the current character and its count to result
//         if (i + 1 >= str.length || str[i] !== str[i + 1]) {
//             compressed += str[i] + countConsecutive;
//             countConsecutive = 0;
//         }
//     }

//     // Return the compressed string only if it is shorter than the original
//     return compressed.length < str.length ? compressed : str;
// }

// // Example usage:
// const originalString = "aabcccccaaa";
// console.log(compressString(originalString)); // Outputs: "a2b1c5a3"

// function findPairWithSum(arr, targetSum) {
//     const pairs = [];

//     // Create a map to store the indices of elements
//     const indexMap = new Map();

//     for (let i = 0; i < arr.length; i++) {
//         const complement = targetSum - arr[i];

//         // Check if the complement exists in the map
//         if (indexMap.has(complement)) {
//             pairs.push([arr[indexMap.get(complement)], arr[i]]);
//         }

//         // Store the index of the current element in the map
//         indexMap.set(arr[i], i);
//     }

//     return pairs;
// }

// // Example usage:
// const arr = [2, 7, 11, 15, 6, 3];
// const targetSum = 9;
// console.log(findPairWithSum(arr, targetSum)); // Outputs: [[2, 7], [6, 3]]

function longestSubstringWithoutRepeatingCharacters(s) {
    // Create a map to store the index of each character's last occurrence
    const charIndexMap = new Map();
    let maxLength = 0;
    let start = 0;

    for (let end = 0; end < s.length; end++) {
        const char = s[end];

        // If the character is already in the map and its index is greater than or equal to the start,
        // update the start pointer to the index after the last occurrence of the character.
        if (charIndexMap.has(char) && charIndexMap.get(char) >= start) {
            start = charIndexMap.get(char) + 1;
        }

        // Update the map with the current character's index
        charIndexMap.set(char, end);

        // Update the maximum length of the substring without repeating characters
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

// Example usage:
const s = "abcabcbb";
console.log(longestSubstringWithoutRepeatingCharacters(s)); // Outputs: 3



