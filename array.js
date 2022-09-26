
function DISTINCTE (Array1, Array2){
    var som = 0
    for(let i = 0 ; i < Array1.length ; i++){
        som += Array1[i]
        for (let j = 0 ; j < Array2.length ; j++){
            if(Array1[i] == Array2[j])
                som -= Array1[i]
            }
    }
    for(let i = 0 ; i < Array2.length ; i++){
        som += Array2[i]
        for (let j = 0 ; j < Array1.length ; j++){
            if(Array2[i] == Array1[j])
            som -= Array2[i]
            }
    }
    return som
}
DISTINCTE ([5,7,9,34,3],[7,6,5,4,3])



function EGALITE (Array1, Array2){
    var som = 0
    for(let i = 0 ; i < Array1.length ; i++){
        for (let j = 0 ; j < Array2.length ; j++){
            if(Array1[i] == Array2[j])
                som += Array1[i] + Array2[j]
            }
        }
    return som
}
EGALITE ([5,7,9,34,3],[7,6,5,4,3])