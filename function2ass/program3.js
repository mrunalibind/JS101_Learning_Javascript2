//Write a custom function that has the same behavior of inbuilt Array Slice Function

function colorSlice(color){
  console.log(color.slice(2,4));
  console.log(color.slice(-2));
  console.log(color.slice(5));
}
colorSlice(["Red","Yellow","Grey","Pink","Blue","White","Purple","Black"]);