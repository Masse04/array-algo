function test (Array1, Array2){
    var som = 0
    for(let i = 0 ; i < Array1.length ; i++){
        for (let j = 0 ; j < Array2.length ; j++){
            if(Array1[i] == Array2[j])
                som += Array1[i]
            }
    }
    for(let i = 0 ; i < Array2.length ; i++){
        for (let j = 0 ; j < Array1.length ; j++){
            if(Array2[i] == Array1[j])
                som += Array2[i]
            }
    }
    return som
}
test ([5,7,9,34],[7,6,5,4])

function test (Array1, Array2){
    var som = 0
    for(let i = 0 ; i < Array1.length ; i++){
        som += Array1[i]
        for (let j = 0 ; j < Array2.length ; j++){
            if(Array1[i] != Array2[j])
                continue
            else
                som -= Array1[i]
                console.log(som)
            }
    }
    for(let i = 0 ; i < Array2.length ; i++){
        som += Array2[i]
        for (let j = 0 ; j < Array1.length ; j++){
            if(Array2[i] != Array1[j])
                continue
            else
                som -= Array2[i]
                console.log(som)
            }
    }
    return som
}
test ([5,7,9,34],[7,6,5,4])