"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, rest) {
        rest.send({ text: 'Api esta en /api/students' });
    }
}
exports.indexController = new IndexController();
