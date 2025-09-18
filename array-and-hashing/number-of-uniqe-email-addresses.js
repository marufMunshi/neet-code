// https://leetcode.com/problems/unique-email-addresses/description/

/**
 * an array of email addresses will be given
 * we have to find out number of unique addresses
 *
 * local name conditions
 * with dot(.) or without dot(.) in the local name will be treated as similar email address
 * alicez@gamail.com and alice.z@gamil.com is same
 *
 * characters after plus(+) will be ignored
 * my+name@gamil.com and my@gmail.com is same
 *
 * domain name conditions
 * must be .com
 * must be one character before .com
 */

/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  const uniqueEmails = new Set();

  /**
   * @param {string} localName
   * @return {string}
   */
  function filterLocalName(localName) {
    let modifiedLocalName = localName.replaceAll(".", "");

    return modifiedLocalName.split("+")[0];
  }

  /**
   * @param {string} domainName
   * @return {string}
   */
  function filterDomainName(domainName) {
    const [firstPart, _] = domainName.split(".");

    if (!firstPart) {
      return "";
    }

    return domainName;
  }

  for (let i = 0; i < emails.length; i++) {
    const currentEmail = emails[i];

    const [localName, domainName] = currentEmail.split("@");

    const modifiedLocalName = filterLocalName(localName);

    console.log("modifiedLocalName", modifiedLocalName);

    if (!modifiedLocalName) {
      continue;
    }

    const modifiedDomainName = filterDomainName(domainName);

    console.log("modifiedDomainName", modifiedDomainName);

    if (!modifiedDomainName) {
      continue;
    }

    uniqueEmails.add(`${modifiedLocalName}@${modifiedDomainName}`);
  }

  return uniqueEmails.size;
};

console.log(
  numUniqueEmails([
    "test.email+alex@leetcode.com",
    "test.e.mail+bob.cathy@leetcode.com",
    "testemail+david@lee.tcode.com",
  ])
);

// console.log(
//   numUniqueEmails(["a@leetcode.com", "b@leetcode.com", "c@leetcode.com"])
// );
