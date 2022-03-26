// https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/

const countStudents = (students, sandwiches) => {
  while (students.length > 0) {
    const canEatTheFirst = students[0] === sandwiches[0];

    if (canEatTheFirst) {
      students.shift();
      sandwiches.shift();
    } else {
      const allStudentsWantSame = students.every(
        (element) => element === students[0]
      );

      if (allStudentsWantSame) {
        return students.length;
      }

      const firstStudent = students.shift();
      students.push(firstStudent);
    }
  }

  return 0;
};
