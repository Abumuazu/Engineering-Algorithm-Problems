/**
 * Laundry Problem
 * Question 2
 *
 * @returns {any} Trip data analysis
 */
 function getMaxPairs(noOfWashes, cleanPile, dirtyPile) {

    // Tranforming cleanPie to an object dictionary 
    let cleanpileObjects = cleanPile.reduce((body, element) => {
        body.hasOwnProperty(element) ? body[element] += 1 : body[element] = 1 
        return body
    }, {})
// Transforming dirtyPie to an object dictionary 
let dirtypileObjects = dirtyPile.reduce((body, element) => {
    body.hasOwnProperty(element) ? body[element] += 1 : body[element] = 1 
    return body
}, {})

           // Creating a loop to decrement the NoOfWashes based on how how many NoOfWashes is provided and how many dirty pairs needs to be washed 
            for (let i = 1; i <= noOfWashes; i++ ) {
                //saving kays and values from object in an array format
                const keys = (array) =>  Object.keys(array);
                const val = (array) => Object.values(array);
    
                let arrayOfOneLegSock = val(cleanpileObjects).reduce((body, element, index) => {
                     if ( element % 2 !== 0) {
                         body.push(keys(cleanpileObjects)[index]);
                        }
                    return body
                 }, [])

                let arrayOfCompletePairs = val(dirtypileObjects).reduce((body, element, index) => {
                   if ( element > 1) {
                        body.push(keys(dirtypileObjects)[index]);
                     }
                     return body
                    }, [])
                    


                 if ( arrayOfOneLegSock.length > 0) {
                    if (arrayOfOneLegSock.some(element => (keys(dirtypileObjects)).includes(element))) {
                      let  oneLegSockIndex = arrayOfOneLegSock.find(element => keys(dirtypileObjects).includes(element));
                        cleanpileObjects[oneLegSockIndex] += 1
                        dirtypileObjects[oneLegSockIndex] -= 1
                        
                    }else if (arrayOfCompletePairs.length > 0) {
                        if (cleanpileObjects.hasOwnProperty(arrayOfCompletePairs[0])) {
                             cleanpileObjects[arrayOfCompletePairs[0]] += 1;
                            dirtypileObjects[arrayOfCompletePairs[0]] -= 1;
                         }else {
                            cleanpileObjects[arrayOfCompletePairs[0]] = 1;
                            dirtypileObjects[arrayOfCompletePairs[0]] -= 1;
                            }  
                            }

                }else if (arrayOfCompletePairs.length > 0) {
                    
                    if (cleanpileObjects.hasOwnProperty(arrayOfCompletePairs[0])) {
                        cleanpileObjects[arrayOfCompletePairs[0]] +=1
                        dirtypileObjects[arrayOfCompletePairs[0]] -=1
                    }else {
                        cleanpileObjects[arrayOfCompletePairs[0]] =  1
                        dirtypileObjects[arrayOfCompletePairs[0]] -= 1
                    }
            }
        
}
cleanpileObjects
let completePairs = Object.values(cleanpileObjects).reduce((body, element) => {
return body + ((element/2) | 0)
}, 0)
return completePairs
}
module.exports = getMaxPairs;
