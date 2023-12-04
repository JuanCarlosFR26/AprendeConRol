const express = require('express');
const { getMazmorras } = require('../controllers/dbMazmorrasControllers');
const router = express.Router();

//========================== USERS ============================================










// ================================= MAZMORRAS =============================================
router.get('/mazmorras', getMazmorras);


module.exports = router;