// max 2 same value 

const remove = (val) => {
    const Val = val;
    for(let i=0; i< Val.length-1; i++){
        for(let j = i+1; j < Val.length; j++){
            if(Val[i] > Val[j]){
                const newVal = Val[i];
                Val[i] = Val[j];
                Val[j] = newVal;
            }
        }
    }
    
    for(let i=1; i < Val.length-1; i++){
        for(let j = i+1; j < Val.length; j++){
            if(Val[i-1] == Val[i] && Val[i] == Val[j]){                
                for(let k = j; k<Val.length-1;k++){
                    const newVal = Val[k];
                    Val[k] = Val[k+1];
                    Val[k+1] = newVal;
                }
                Val.length -= 1;
            }
        } 
    }
    console.log(Val);

}
const Arr = [1,1,2,2,3,3,1,2,3,4,5,6,6,5,4,4,5,8,9,9,9];
remove(Arr);
