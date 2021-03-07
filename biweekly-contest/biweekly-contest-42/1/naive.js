/**
 * 找规律，Map
 */
var countStudents = function(students, sandwiches) {
  const studentFreq = Array.from({ length: 2 }, () => 0);
  for (const s of students) {
    ++studentFreq[s];
  }
  
  let eaten = 0;
  for (const ch of sandwiches) {
    if (studentFreq[ch] > 0) {
      --studentFreq[ch];
      ++eaten;
    } else {
      break;
    }
  }
  return sandwiches.length - eaten;
};