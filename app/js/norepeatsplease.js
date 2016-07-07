var permsContainer=[];

function permAlone(str){
    permsContainer = [];
    //holds the final array after all the functions have done their jobs
    var finalpermsContainer;
    //changes the str into an array
    var permArr=str.split("");
    //calls the generate function
    generate(permArr.length,permArr);
    //filters out all the permutations that don't have consecutive letters and puts them into finalpermsContainer
    finalpermsContainer=permsContainer.filter(getRidOfConsecLetters);

}
// generates the permutations 
function generate(n, permArr) {
    
    function swap(x,y){
     var b = permArr[y];
     permArr[y] = permArr[x];
     permArr[x] = b;
 }

    if(n===1){
        permsContainer.push(permArr.join(""));
        return permArr;
    } else {
        for(var i=0; i < n-1; i++){
           generate(n-1,permArr);
           if(n%2===0){
               swap(i, n-1, permArr);   
           }else {
            swap(0, n-1, permArr);
           } 
        }
        generate(n-1,permArr);
    }
    
}
 
 function getRidOfConsecLetters(element,index,array){
    var regexp = /(.)\1+/g;
    if (element.match(regexp)){
        return  false;
    } else{
        return true;
    }
 }

permAlone('aab');
