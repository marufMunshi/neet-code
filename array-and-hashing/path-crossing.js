// https://leetcode.com/problems/path-crossing/description/

/**
 * Problem description
 *
 * a string of paths "N", "S", "E" or "W" will be given.
 * representing moving one unit North, South, East or West respectively
 * origin is 0,0 on a 2D plane. move the point according to path and check if path is crossed.
 * If crossed return true otherwise false
 */

/**
 * Solution approach
 *
 * 2D plane is x,y. and origin 0,0
 *
 * going north means moving one positive point to y
 * going south means moving one negative point to y
 *
 * going east means moving one positive point to x
 * going west means moving one negative point to x
 *
 * we have two variables x and y, initialize with 0.
 * so, initial path is 0,0. we will store all the visited path in a set
 * if path is exist we return true other wise false
 */

/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
  let x = 0;
  let y = 0;

  const visitedPath = new Set();
  visitedPath.add(`${x},${y}`);

  for (let i = 0; i < path.length; i++) {
    if (path[i] === "N") {
      y++;
    } else if (path[i] === "S") {
      y--;
    } else if (path[i] === "E") {
      x++;
    } else {
      x--;
    }

    const currentPath = `${x},${y}`;

    if (visitedPath.has(currentPath)) {
      return true;
    }

    visitedPath.add(currentPath);
  }

  return false;
};
