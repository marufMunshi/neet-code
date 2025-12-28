// https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/

/**
 * There are 2 types of sandwich "0" and "1". sandwiches are stored in stack, only top one can be taken
 * when a student does not take the sandwich, rest of the student can not take any more sandwich
 *
 * students are given in a array and sandwiches are given in an array
 */

/**
 * Solution approach
 *
 * we will store the sandwich count in a map.
 * sandwiches = [0,1,0,1], so map would {0:2, 1:2}
 * students = [1,1,0,0], now we will loop the students array
 * we will decrease the sandwich count from the map
 * when any type of sandwich is becoming less than 0, we will the terminate the loop
 *
 * than we will sum the remaining the sandwiches. this remaining result is number of student is unable to eat lunch
 */

/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  const studentsSandWichCount = new Map([
    [0, 0],
    [1, 0],
  ]);

  for (const sandwichType of students) {
    const currentValue = studentsSandWichCount.get(sandwichType);

    studentsSandWichCount.set(sandwichType, currentValue + 1);
  }

  for (const sandwich of sandwiches) {
    const currentValue = studentsSandWichCount.get(sandwich);

    if (currentValue - 1 < 0) {
      break;
    }

    studentsSandWichCount.set(sandwich, currentValue - 1);
  }

  let result = 0;

  for (const [key, value] of studentsSandWichCount) {
    result = result + value;
  }

  return result;
};
