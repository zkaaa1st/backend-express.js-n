const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
// const { protect } = require('../middleware/authMiddleware'); // Uncomment jika sudah ada

// ✅ Public routes (bisa diakses tanpa login)
router.get('/', projectController.index);       // GET semua projects
router.get('/:id', projectController.show);     // GET 1 project by ID

// ✅ Protected routes (butuh login) - tambahkan middleware protect jika perlu
router.post('/', projectController.store);      // POST tambah project ← PENTING: pakai 'store', bukan 'create'
router.put('/:id', projectController.update);   // PUT edit project
router.delete('/:id', projectController.destroy); // DELETE project

module.exports = router;