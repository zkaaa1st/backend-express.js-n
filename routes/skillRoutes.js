const express = require('express');
const router = express.Router();
const skillController = require('../controllers/skillController');
const auth = require('../middleware/auth');

// ✅ Public routes (bisa diakses tanpa login)
router.get('/', skillController.index);       // GET semua skills
router.get('/:id', skillController.show);     // GET 1 skill by ID

// ✅ Protected routes (butuh login) - tambahkan middleware protect jika perlu
router.post('/', skillController.store);      // POST tambah skill ← PENTING: pakai 'store', bukan 'create'
router.put('/:id', skillController.update);   // PUT edit skill
router.delete('/:id', skillController.destroy); // DELETE skill

module.exports = router;

