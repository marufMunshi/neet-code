// https://leetcode.com/problems/time-needed-to-buy-tickets/description/

/**
 * Problem description
 *
 * an array of tickets is given, each index represent how many tickets one person would buy.
 * each person can buy one ticket at a time and take 1 second. after that person would go back to end of the line.
 * if a person buying tickets is finished, the person will leave the line.
 *
 * a position will be given k, we have to calculate how much time it would take for kth person to buy tickets
 */

/**
 * Solution approach
 *
 * we will simulate the process of buying tickets
 * a while loop will run until kth position tickets are greater than 0
 *
 * a variable result will be incremented after every ticket purchase for ith position and ticket count will be decreased
 * when i index is out of bound, reset the i index to 0
 * if ith position ticket is 0 we will not increase the result count
 *
 * return the result
 */

/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
  let result = 0;

  let i = 0;

  while (tickets[k] > 0) {
    if (tickets[i] > 0) {
      tickets[i] = tickets[i] - 1;
      result++;
    }

    i++;

    if (i === tickets.length) {
      i = 0;
    }
  }

  return result;
};
