var router = require('koa-router')();
import { postUser, getUser } from '../controller/user';

router.get('/', getUser);
router.post('/', postUser);
module.exports = router;
