// let arr  =  [1,2,3,6,4,5,9,8,7,];
// let n = 5;

// function a (arr , n){
//     for (let i = 0; i < arr.length; i++){
        
//         if(arr[i]>n){
//             console.log(arr[i]);
//         }       
//     }
// }
// a(arr,n);


// let str = "abcdabcdefgggh";

// function get(str){
//     let ans = "";
//     for(let i = 0; i < str.length; i++){
//         let currChar = str[i];
//         if(ans.indexOf(currChar) == -1){
//             ans += currChar;
//         }
//     }
//     return ans;
// }
// get(str);


let country = ["Australia","Germany", "france", "United states of america"];

function large (country){
    let ansIdx = 0;
    for(let i = 0; i < country.length; i++ ){
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;
        if(currLen > ansLen){
            ansIdx = i;
        }
    }
    return country[ansIdx];
}
large(country);