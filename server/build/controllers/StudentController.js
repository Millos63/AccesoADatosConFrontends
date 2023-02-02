"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentController = void 0;
class StudentController {
    index(req, rest) {
        rest.send('ESTUDIANTES');
    }
}
exports.studentController = new StudentController();
exports.default = exports.studentController;
