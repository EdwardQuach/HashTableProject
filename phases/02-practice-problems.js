function anagrams(str1, str2) {
  
  let boolean = false;
  let str1Arr = str1.split("")
  let str2Arr = str2.split("")
  let arr1 = str1Arr.sort();
  let arr2 = str2Arr.sort();
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      boolean = true;
    } else {
      return false;
    }
  }
  return boolean;

}


function commonElements(arr1, arr2) {
  let newArr = []
  
  let set1 = new Set(arr1)
  let set2 = new Set(arr2)
  for (let i = 0; i < arr1.length; i++) {
     let  element = arr1[i];
     if (set1.has(element) && set2.has(element)){
       newArr.push(element)
     }
    
  }
  return newArr
}


function duplicate(arr) {
  let set = new Set()
   
  for (let ele of arr) {
    if (set.has(ele)) {
      return ele 
    }
    set.add(ele) 

  }
}


function twoSum(nums, target) {
  {
    var l, r;
 
    /* Sort the elements */
    nums.sort();
 
    /* Now look for the two candidates in
    the sorted array*/
    l = 0;
    r = nums.length - 1;
    while (l < r) {
        if (nums[l] + nums[r] == target)
            return true;
        else if (nums[l] + nums[r] < target)
            l++;
        else // A[i] + A[j] > sum
            r--;
    }
    return false;
}
}


function wordPattern(pattern, strings) {
  let trigerStr = {}
    
  const patterns = pattern.split('')
 
  
  if (patterns.length != strings.length) return false
  
  for(var index = 0; index < patterns.length; index++) {
      if (trigerStr[patterns[index]]) {
          if (trigerStr[patterns[index]] != strings[index]) return false
      } else {
          var tempKeys = Object.values(trigerStr);
          if (tempKeys.includes(strings[index])) return false
          trigerStr[patterns[index]] = strings[index]
      }
  }
  return true
  
     
  } 



module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];