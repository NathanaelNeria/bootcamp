let arrayMaster = Array.from({length: 100}, () => Math.floor(Math.random() * 50) + 1)
let arrGanjil = []
let arrGenap = []

for(let i = 0; i < arrayMaster.length; i++){
    if(arrayMaster[i] % 2 != 0){
        arrGanjil.push(arrayMaster[i])
    }
    else{
        arrGenap.push(arrayMaster[i])
    }
}

function arrMin(arr){
    let min = arr[0]
    for (let i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i]
        }
    }
    return min
}

function arrMax(arr){
    let max = arr[0]

    for (let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}

function arrTotal(arr){
    let total = arr[0]

    for(let i = 0; i < arr.length; i++){
        total += arr[i]
    }
    return total
}

function arrAverage(arr){
    let total = arrTotal(arr)

    return total/arr.length
}

function minComparison(arrayGanjil, arrayGenap){
    let minGanjil = arrMin(arrayGanjil)
    let minGenap = arrMin(arrayGenap)

    if(minGanjil > minGenap){
        return "Min lebih besar array ganjil"
    }
    else{
        return "Min lebih besar array genap"
    }
}

function maxComparison(arrayGanjil, arrayGenap){
    let maxGanjil = arrMax(arrayGanjil)
    let maxGenap = arrMax(arrayGenap)

    if(maxGanjil > maxGenap){
        return "Max lebih besar array ganjil"
    }
    else{
        return "Max lebih besar array genap"
    }
}

function totalComparison(arrayGanjil, arrayGenap){
    let totalGanjil = arrTotal(arrayGanjil)
    let totalGenap = arrTotal(arrayGenap)

    if(totalGanjil > totalGenap){
        return "Total lebih besar array ganjil"
    }
    else if(totalGanjil == totalGenap){
        return "Total memiliki nilai sama antara array genap dan ganjil"
    }
    else{
        return "Total lebih besar array genap"
    }
}

function averageComparison(arrayGanjil, arrayGenap){
    let averageGanjil = arrAverage(arrayGanjil)
    let averageGenap = arrAverage(arrayGenap)

    if(averageGanjil > averageGenap){
        return "Rata rata lebih besar array ganjil"
    }
    else if(averageGanjil == averageGenap){
        return "Rata rata nilai sama antara array genap dan ganjil"
    }
    else{
        return "Rata rata nilai lebih besar array genap"
    }
}


console.log('Array master: ', arrayMaster)
console.log('Array ganjil: ', arrGanjil)
console.log('Array genap', arrGenap)
console.log('Length array: ', arrayMaster.length)
console.log('Length arrGenap: ', arrGenap.length)
console.log('Length arrGanjil: ', arrGanjil.length)
console.log('Ganjil Min: ', arrMin(arrGanjil))
console.log('Ganjil Max: ', arrMax(arrGanjil))
console.log('Genap Min: ', arrMin(arrGenap))
console.log('Genap Max: ', arrMax(arrGenap))
console.log('Total genap: ', arrTotal(arrGenap))
console.log('Total ganjil: ', arrTotal(arrGanjil))
console.log('Avg genap: ', arrAverage(arrGenap))
console.log('Avg ganjil: ', arrAverage(arrGanjil))
console.log('-------------------------Perbandingan-----------------------------')
console.log('Perbandingan min: ', minComparison(arrGanjil, arrGenap))
console.log('Perbandingan max: ', maxComparison(arrGanjil, arrGenap))
console.log('Perbandingan total: ', totalComparison(arrGanjil, arrGenap))
console.log('Perbandingan rata-rata: ', averageComparison(arrGanjil, arrGenap))