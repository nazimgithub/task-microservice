const express = require('express');
const { create, all } = require('../controllers/task.controller');
//const jwt = require('jsonwebtoken');

const router = express.Router();

// const auth = (req, res, next) => {
//     const token = req.headers.authorization?.split(' ')[1];
//     if (!token) return res.status(401).send('Unauthorized');
//     try {
//         req.user = jwt.verify(token, process.env.JWT_SECRET);
//         next();
//     } catch {
//         res.status(401).send('Invalid token');
//     }
// };

router.post('/create', create);
router.get('/all', all);

module.exports = router;
