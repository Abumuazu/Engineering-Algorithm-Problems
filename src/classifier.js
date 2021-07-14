/**
 * This is the entry point to the program
 * Question 1 - Classifier
 *
 * @param {any} input Array of student objects
 */

 function classifier(input) {

    Object.freeze(input)
    if (input .length === 0) {
        return {noOfGroups: 0 }
    }

     
    const output = input.map(presentObj =>  {
        
        let  individualYear = new Date (presentObj.dob).getFullYear()
        let presentYear = new Date().getFullYear()
        // Getting the age of individuals in the input of object
        let individualAge = presentYear - individualYear;
          // creating a property nme AGE and assigning the age gottent above to it
          

          return  {...presentObj, age: individualAge }
    }, 0)
    // sorting the input of object with respect to age in ascending order 
          let sortedAge = output.sort((a,b) => a.age - b.age)
          let parentGroup = [[]]
// Looping through the Sorted objects and spliting into groups 
    sortedAge.map(presentSortedAge => {
        // declaring a variable to target the contanier for the groups 
      let presentSubGroup =  parentGroup[parentGroup.length-1]

      if (presentSubGroup.length === 0) {
          presentSubGroup.push(presentSortedAge) }
      else if (presentSubGroup.length === 3 ){
          parentGroup.push([presentSortedAge])  }

     else { let previousSubGroup = presentSubGroup[presentSubGroup.length-1]

      if ( (presentSortedAge.age - previousSubGroup.age) <= 5 ) {
          presentSubGroup.push(presentSortedAge)}
      else { parentGroup.push([presentSortedAge])}
  }

      //console.log(parentGroup)
      })

  // Using reduce to get the final output
  let finalOutput = parentGroup.reduce((finalObjects, presentArray, index, arr) => {
    let members = presentArray
   
console.log(members)
    let oldest = presentArray[presentArray.length-1].age;
    let sum = presentArray.reduce((accum,obj)=>accum + obj.age, 0);
    let regNo = presentArray.map(obj => +obj.regNo)
    let regNos =regNo.sort((first,second) => {
        return first-second;
    });

    finalObjects['noOfGroups'] = arr.length;
    finalObjects['group'+(index+1)] = {
    members:members,
    oldest:oldest,
    sum:sum,
    regNos:regNos}
return finalObjects
  },{})
return finalOutput
}

module.exports = classifier;


    






