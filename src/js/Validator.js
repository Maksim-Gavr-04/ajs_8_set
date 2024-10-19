export class Validator {
  static validateUsername(username) {
    const shouldStartWithLatinLetter = /^[a-z]/i.test(username);
    const shouldEndWithLatinLetter = /[a-z]$/i.test(username);
    const latinLettersDashesUnderscoresNumbersAllowed = /[a-z0-9_-]+/i.test(username);
    const moreThanThreeNumbersNotAllowed = !/[0-9]{4,}/.test(username);

    if (shouldStartWithLatinLetter &&
      shouldEndWithLatinLetter &&
      latinLettersDashesUnderscoresNumbersAllowed &&
      moreThanThreeNumbersNotAllowed) {
      return true;
    }

    return false;
  }
}
