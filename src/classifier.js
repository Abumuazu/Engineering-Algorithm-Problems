/**
/ * This is the entry point to the program
 * Question 1 - Classifier
 *
//  * @param {any} input Array of student objects
//  */
const input = [
    {
      name: 'Hendrick',
      dob: '1853-07-18T00:00:00.000Z',
      regNo: '041',
    },
    {
      name: 'Albert',
      dob: '1879-03-14T00:00:00.000Z',
      regNo: '033',
    },
    {
      name: 'Marie',
      dob: '1867-11-07T00:00:00.000Z',
      regNo: '024',
    },
    {
      name: 'Neils',
      dob: '1885-10-07T00:00:00.000Z',
      regNo: '02',
    },
    {
      name: 'Max',
      dob: '1858-04-23T00:00:00.000Z',
      regNo: '014',
    },
    {
      name: 'Erwin',
      dob: '1887-08-12T00:00:00.000Z',
      regNo: '09',
    },
    {
      name: 'Auguste',
      dob: '1884-01-28T00:00:00.000Z',
      regNo: '08',
    },
    {
      name: 'Karl',
      dob: '1901-12-05T00:00:00.000Z',
      regNo: '120',
    },
    {
      name: 'Louis', 
      dob: '1892-08-15T00:00:00.000Z',
      regNo: '022',
    },
    {
      name: 'Arthur',
      dob: '1892-09-10T00:00:00.000Z',
      regNo: '321',
    },
    {
      name: 'Paul',
      dob: '1902-08-08T00:00:00.000Z',
      regNo: '055',
    },
    {
      name: 'William',
      dob: '1890-03-31T00:00:00.000Z',
      regNo: '013',
    },
    {
      name: 'Owen',
      dob: '1879-04-26T00:00:00.000Z',
      regNo: '052',
    },
    {
      name: 'Martin',
      dob: '1871-02-15T00:00:00.000Z',
      regNo: '063',
    },
    {
      name: 'Guye',
      dob: '1866-10-15T00:00:00.000Z',
      regNo: '084',
    },
    {
      name: 'Charles',
      dob: '1868-02-14T00:00:00.000Z',
      regNo: '091',
    },
  ]
function classifier(input) {
    if (Array.isArray(input) === false) {
      throw new TypeError('Input must be an array');
    }
    if (input.length === 0) {
      return { noOfGroups: 0 };
    }
    const students = input.map((student) => {
      const age = calculateAge(student.dob);
      return { ...student, age };
    });
    students.sort((first, second) => first.age - second.age);
    let groupInfo = { noOfGroups: 0 }
    for ( let student of students) {
        const currentGroupNumber = groupInfo.noOfGroups;
        const nextGroupNumber = currentGroupNumber + 1;
        const currentGroupName = `group${currentGroupNumber}`;
        const nextGroupName = `group${nextGroupNumber}`;
        const currentGroup = groupInfo[currentGroupName] || {
          members: [],
          regNos: [],
          sum: 0,
        };
        const isOlder = currentGroup.members.some((existingMember) => {
          return student.age - existingMember.age > 5;
        });
        if (isOlder || currentGroup.members.length >= 3) {
          groupInfo = {
            ...groupInfo,
            [nextGroupName]: {
              members: [student],
              regNos: [Number(student.regNo)],
              oldest: student.age,
              sum: student.age,
            },
            noOfGroups: nextGroupNumber,
          };
          continue
        }
    
        groupInfo = {
          ...groupInfo,
          [currentGroupName]: {
            members: [...currentGroup.members, student],
            regNos: [...currentGroup.regNos, Number(student.regNo)].sort(
              (a, b) => a - b,
            ),
            oldest: student.age,
            sum: currentGroup.sum + student.age,
          },
        };
    
        return groupInfo
    }
  }
  /**
   * Calculates the age given a date of birth
   *
   * @param {string | number} dob
   * @return {number}
   */
  function calculateAge(dob) {
    const today = new Date();
    const birthDate = new Date(dob);
    return today.getFullYear() - birthDate.getFullYear();
  }
  module.exports = classifier;

  console.log(classifier(input))