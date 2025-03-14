const removeElement = (val) =>{
    newList = val;
    for(let i = 0; i<newList.length-1; i++){
        for(let  j = i+1;j<newList.length; j++){
            if(newList[i] == newList[j]){
                for(let k = j; k<newList.length -1; k++){
                    let val = newList[k];
                    newList[k] = newList[k+1];
                    newList[k+1] = val;
                }
                newList.length -=1;
            }
            if(newList[i] > newList[j]){
                const val = newList[i];
                newList[i] = newList[j];
                newList[j] = val;
            }
        }
    }
    return newList;
}
const arr= [1,1,2,3,3,6,7,9,7,9,8,8,4,5,5,6];
console.log(removeElement(arr));
