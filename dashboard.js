var express = require("express")
const router = express.Router();
router.use(express.static('/home/vishnu/Desktop/soundcollide/soundcollide-dashboard-app/build'));
router.get('*', function (req, res) {
    res.sendFile('/home/vishnu/Desktop/soundcollide/soundcollide-dashboard-app/build/index.html');
  });


module.exports = router
