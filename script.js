function firstNonRepeatedChar(str) {
    const charcount={}
	if(str.length===0){
        return null;
    }
    for(let char of str ){
        charcount[char]=(charcount[char]||0)+1;
    }
    for(let char of str){
        if(charcount[char]===1){
            return char;
        }
        else{
            return null;
        }
    }
	return null;

   }
   const input = prompt("Enter a string");
   alert(firstNonRepeatedChar(input)); 
   