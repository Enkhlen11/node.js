const http = require("http");
const { faker } = require("@faker-js/faker");
const { start } = require("repl");

function createRandomStudent() {
  return {
    _id: faker.string.uuid(),
    avatar: faker.image.avatar(),
    birthday: faker.date.birthdate(),
    email: faker.internet.email(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    sex: faker.person.sexType(),
    grades: faker.number.int({ min: 0, max: 100 }),
  };
}
http
  .createServer(function (req, res) {
    const students = [];
    for (let i = 0; i < 10; i++) {
      const newStudent = createRandomStudent();
      students.push(newStudent);
    }

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(students));
  })
  .listen(8080);
