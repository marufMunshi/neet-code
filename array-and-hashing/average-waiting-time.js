// https://leetcode.com/problems/average-waiting-time/description/

/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function (customers) {
  let cookingStartTime = customers[0][0];
  let totalCookingTime = 0;

  for (const [arrival, time] of customers) {
    if (arrival > cookingStartTime) {
      cookingStartTime = arrival;
    }

    const currentCustomerWaitingTime = cookingStartTime - arrival;
    totalCookingTime = totalCookingTime + (currentCustomerWaitingTime + time);

    cookingStartTime = cookingStartTime + time;
  }

  return totalCookingTime / customers.length;
};
