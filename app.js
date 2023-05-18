const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
 
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/design.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/pdf', (req, res) => {
  const filePath = path.join(__dirname,'/full_report_style_guide.pdf');
  res.sendFile(filePath);
});
 
router.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/about.html'));
});
 
router.get('/sitemap',function(req,res){
  res.sendFile(path.join(__dirname+'/sitemap.html'));
});
 
//add the router
app.use('/', router);
app.listen(process.env.port || 3000);
 
console.log('Running at Port 3000');