function sameFrequency(a,b) {
    const aStr = a.toString()
    const bStr = b.toString()
   
    if (aStr.length != bStr.length) {
        return false
    }

    let aObj = createCounterObject(aStr)
    let bObj = createCounterObject(bStr)
    
    return isEqual(aObj, bObj)
}

//Function to compare if two objects are Equal Javascript
const isEqual = (...objects) => objects.every(obj => JSON.stringify(obj) === JSON.stringify(objects[0]))

function createCounterObject (str) {
    let Obj = {};    
    for (let i = 0; i < str.length; i++ ) {
        console.log()
        if (Obj[str[i]]) {
            Obj[str[i]] += 1 
        } else {
            Obj[str[i]] = 1 
        }
    }
    return Obj
}

module.exports = sameFrequency;