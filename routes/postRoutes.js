const express = require('express')
const router = express.Router()
const postControle = require('../controllers/postController')

router.get('/', postControle.getAllPosts);
router.get('/:id', postControle.getPost);
router.post('/', postControle.createPost);
router.put('/:id', postControle.updatePost);
router.delete('/:id', postControle.deletePost);

module.exports = router;
