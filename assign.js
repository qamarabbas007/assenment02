
//-------------------------------Questions-1----------------------------------------
// Write a javascript function that reverse a number. E.g--->2345 to --->5432
// var x= prompt("Enter the number")
// function reverse_Number(x){
//     x=x+"";
//     return x.split("").reverse().join("");
// }
// console.log(reverse_Number(x));
//             or      
//console.log(reverse_Number(12345));

//-------------------------------Question-2----------------------------------------
// Write a javascript function that genrate a all combination of string. like--- dog 
// // debugger,do,dog,o,og,g 
// var str=prompt("Enter the word");
// function combination_Of_String(str){
// var list_of_String=[];
// for(var i=0; i<str.length; i++){
//     for(var j=i+1; j<str.length+1; j++){
//         list_of_String.push(str.slice(i,j))
//     }
// }
// return list_of_String;
// }
// console.log(combination_Of_String(str));

//------------------------------Question-3-----------------------------
// Q.No= Write a function that takes first & last name and then in
// //             greets the user using his full name.
//   function name(firstName,lastName){
//      var firstName="Qamar";
//      var lastName="Abbas";
//       console.log(firstName+lastName);
      
//   }
//   name(firstName,lastName);
//-----------------------------Questions-4--------------------------------
// Write a javasript function That accepts a string as a parameter and convert the 
//          first later of each words of the string in upper case: e.g-
//          "the web development course"--->" The Web Development Course".

// function convert_To_UpperCase(strings){
//   var array1=strings.split(' ');
//   var newarray2=[];
//   for(var i=0; i<array1.length; i++){
//     newarray2.push(array1[i].charAt(0).toUpperCase()+array1[i].slice(1));
//   }
//   return newarray2.join(' ');
// }
// console.log("the web development coures")
// console.log(convert_To_UpperCase("the web development coures"));

//-----------------------------Questions------------------------------------
//  Write a javascript function that accept a strings as parameter and find the
// longest word within the string.e.g-- Web Development Tutorial--output--Development
//  function longest_word(str){
//      var word = str.split(' ');
//      var size= 0;
//      var max=[' '];
//      for(var i=0; i<word.length;i++){
//          if(word[i].length >=size){
//              size=word[i].length;
//              if(max[max.length -1].length < word[i].length){
//                  max=[];
//                  max.push(word[i]);
//              }
//              else{
//                  max= [max, word[i]];
//              }
//          }
//      }
//      return [...max];
//  }
//  console.log(longest_word("web development tutorial"));
 //-------------------------------------------------------------------------

//  Write a JavaScript function that returns a passed string with letters
//      in alphabetical order.
//                  Example string: 'webmaster'
//                  Expected Output: 'abeemrstw'
 
// function alphanumeric_Orders(str){
//     return str.split('').sort().join('');
// }
// console.log(alphanumeric_Orders("webmaster"));
//-------------------------------------------------------------------------------

// Write a JavaScript function that accepts a string as a parameter and counts the
// number of vowels within the string.
//             Example string: 'The quick brown fox'
//             Expected Output: 5

// function vowel_count(str1){
//     var vowel_list= "aeiouAEIOU";
//     var vowel_counts=0;
//     for(var i=0; i<str1.length; i++){
//         if(vowel_list.indexOf(str1[i])!== -1){
//             vowel_counts+= 1;
//         }
//     }
//     return vowel_counts;
// }
// console.log(vowel_count("The quick brown foxe"));
// //------------------------------------------------------------------------
// var x,y,chr;
// for(x=1; x<=6;x++){
//     for(y=1; y<x; y++){
//         chr=chr +"*";
//     }
//     console.log(chr);
//     chr='';
// }
//--------------------------------------------------------------
//                           <---Question--->
//Write a javascript function which will take ab array of number stored and find 
//the second lowest and second greatest number.
//                 e.g-  array=[12345678]
//               output- second lowest is -2 and second greatest is -7
// function second_lowest_and_greatest(arr1){
//     arr1.sort();
//     var n= arr1.length;
//     var lowest_number=arr1[1];
//     var greatest_number=arr1[n-2];
//     console.log("Second lowest number is: "+lowest_number+"\n Second greatest number is "+greatest_number);

// }
// second_lowest_and_greatest([6,4,3,7,8,2,1]);
//---------------------------------------------------------------------------
//                             <---Challenges-08--->

// Write a function that computes factorial of a number and display in your browser.

function factorial(num){
    if(num<0){
        return -1;

    }
    else if(num===0){
        return 1;
    }
    else{
        return(num * factorial(num-1));
    }

}
document.write(factorial(5));




