const studentsData = [
  {
    firstName: 'Василий',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Java',
  },
  {
    firstName: 'Иван',
    lastName: 'Иванов',
    admissionYear: 2018,
    courseName: 'JavaScript',
  },
  {
    firstName: 'Александр',
    lastName: 'Федоров',
    admissionYear: 2017,
    courseName: 'Python',
  },
  {
    firstName: 'Николай',
    lastName: 'Петров',
    admissionYear: 2019,
    courseName: 'Android',
  }
];

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Student extends User {
  constructor(firstName, lastName, admissionYear, courseName) {
    super(firstName, lastName);
    this.admissionYear = admissionYear;
    this.courseName = courseName;
  }

  get course() {
    return new Date().getFullYear() - this.admissionYear;
  }
}

class Students {
  constructor(studentsData) {
    this.studentsData = studentsData;
  }

  getInfo() {
    return this.studentsData.sort((a, b) => b.admissionYear - a.admissionYear).reduce((acc, currentStudent) => {
      const student = new Student(currentStudent.firstName, currentStudent.lastName, currentStudent.admissionYear, currentStudent.courseName);
      acc.push(`${student.fullName} - ${student.courseName}, ${student.course} курс`);
      return acc;
    }, [])
  }
}

const student = new Students(studentsData);

console.log(student.getInfo());