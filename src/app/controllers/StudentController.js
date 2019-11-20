import Student from '../models/Student';

class UserController {
  async store(req, res) {
    // console.log(req.body);
    const student = await Student.create(req.body);

    return res.json(student);
  }
}

export default new UserController();
