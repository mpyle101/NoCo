const doubler = arr => {
    const results = []
    for (let i=0; i < arr.length; i++) {
        results.push(arr[i] * 2)
    }
    return results
}