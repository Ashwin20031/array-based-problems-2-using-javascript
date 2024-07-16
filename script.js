//program 1 check element is in array
function findElement(arr,ele){

    for( let i = 0 ; i < arr.length ; i++){
        if (arr[i]==ele){
            return "Element is present in the "+i+" position"
        }
        
    }
    return "Element is not  present in the  array"
}

// let result=findElement([1,23,4,53,2,6],6);
// console.log([1,23,4,53,2,6])
// console.log(result)


//program 2 to find small and largest element in an array
function findLargeAndSmall(arr){

    let max=-1000000;
    let min=1000000;
    for( let i = 0 ; i < arr.length ; i++){
        if (arr[i]>max)max=arr[i];
        if (arr[i]<min)min=arr[i];    
    }
    return [min,max]
}

// let result=findLargeAndSmall([1,23,4,53,2,6],6);
// console.log([1,23,4,53,2,6])
// console.log("the smallest and largest element in the array is")
// console.log(result)


//program 3 to find if both arrays are equal and same elements
function compareEqual(arr1,arr2){
    if (arr1.length!=arr2.length)return "The arrays is not equal"

    for( let i = 0 ; i < arr1.length ; i++){
        if (arr1[i]!=arr2[i])return "the array elements of both array are not equal ";
    }
    return "the array elements of both array are equal" 
}

// let arr1=[1,2,3,4,5]
// let arr2=[1,2,3,4,5]
// let result=compareEqual(arr1,arr2);
// console.log(arr1)
// console.log(arr2)
// console.log(result)



//program 4 merge two array i
function mergeArray(arr1,arr2){
    
    let newArray=[]
    
    for( let i = 0 ; i < arr1.length ; i++){
        newArray.push(arr1[i])
    }
    for( let i = 0 ; i < arr2.length ; i++){
        newArray.push(arr2[i])
    }
    return newArray
}

// let arr1=[1,2,3,4,5]
// let arr2=[6,7,8,9,10]
// let result=mergeArray(arr1,arr2);
// console.log(arr1)
// console.log(arr2)
// console.log("the merged array is")
// console.log(result)


//program 5 generate n range of values
function generateRange(range){
    
    let newArray=[]
    
    for( let i = 1 ; i <= range ; i++){
        newArray.push(i)
    }
    return newArray
}

let result=generateRange(10)
console.log("the range of value ")
console.log(result)
