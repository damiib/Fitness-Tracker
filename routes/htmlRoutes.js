const router = require("express").Router();
const path = require("path");

  
    router.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/index.html'));
    });
  
    router.get('/exercise', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/exercise.html'));
    });
  
    // If no matching route is found default to home
    router.get('/stats', (req, res) => {
      res.sendFile(path.join(__dirname, '../public/stats.html'));
    });
  
    module.exports = router;