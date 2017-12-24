function github(input) {
  var myRe = /github\.com/;
  var hit = input.match(myRe);
  if (hit == null) {
    return false;
  }
  return true;
}

module.exports = github;
