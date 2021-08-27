function linearSearch(arr, val) {
    let index = -1;

    for (let i =0; i < arr.length; i++) {
        if (val === arr[i]) {
            index = i
        }
    }
    
    return index
}

module.exports = linearSearch;