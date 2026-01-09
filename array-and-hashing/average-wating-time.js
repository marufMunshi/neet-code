// https://leetcode.com/problems/average-waiting-time/description/

/**
 * Problem description
 *
 * an 2d array of integers called customers is given
 * [[1,2],[2,5],[4,3]]
 * here [1,2] -> 0 index is arrival time, 1 index is preparing time
 * a chef takes order one by one and prepares food
 *
 * first order arrival time is 1 and preparation time is 2, so total is 3
 * after 3 time, chef can take 2nd order
 * we have to found average time needed for all orders
 */

/**
 * Solution approach
 *
 * we will track cookingStartTime when chef actually started cooking
 * for the first index, it will be arrival time
 * cookingStartTime will be initialized with customers[0] arrival time
 *
 * loop the customers
 * so, first we have to find the currentCustomerWaitingTime
 * currentCustomerWaitingTime = cookingStartTime - currentCustomerArrivalTime
 *
 * now, we will also globally track totalCookingTime
 * totalCookingTime = totalCookingTime + (currentCustomerWaitingTime + preparationTime);
 *
 * then we will update the cookingStartTime
 * cookingStartTime = cookingStartTime + preparationTime
 *
 * there is a case where customer may arrive later than the cookingStart time
 * so, if arrivalTime is grater than cookingStartTime,
 * we will update cookingStartTime with arrivalTime
 *
 * return totalCookingTime / customers.length
 */

/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function (customers) {
  let cookingStartTime = customers[0][0];
  let totalCookingTime = 0;

  for (let i = 0; i < customers.length; i++) {
    const [arrivalTime, preparationTime] = customers[i];

    if (arrivalTime > cookingStartTime) {
      cookingStartTime = arrivalTime;
    }

    const currentCustomerWaitingTime = cookingStartTime - arrivalTime;
    totalCookingTime =
      totalCookingTime + (currentCustomerWaitingTime + preparationTime);

    cookingStartTime = cookingStartTime + preparationTime;
  }

  return totalCookingTime / customers.length;
};
