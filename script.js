function firstNonRepeatedChar(str) {
    let charcount={}
    if(str.length===0){
        return null
    }

    for(let char of str ){
        if(charcount[char]){
            charcount[char]++;
        }
        else{
            charcount[char]=1;
        }
    }
    for(let char of str){
        if(charcount[char]===1){
            return char;
        }
	}
	return null
		
 }
   const input = prompt("Enter a string");
   alert(firstNonRepeatedChar(input)); 