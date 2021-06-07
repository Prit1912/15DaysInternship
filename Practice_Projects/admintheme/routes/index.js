var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var mysql = require('mysql');


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'cruddemo'
});
 

connection.connect(function(err){
  if(!err){
    console.log("DB connected");
  }else{
    console.log("DB not connected")
  }
})

//add category
router.get('/addcategory', function(req, res, next) {
  res.render('forms');
});

router.post('/addcate',function(req,res,next){
  const datas = {
      // category_id: req.body.txt1,
      category_name: req.body.txt2
  }

  connection.query("insert into category set ?",datas,function(err,result){
      if(err) throw err;
      res.redirect('/addcategory')
  })
});


//display category
router.get('/displaycategory', function(req, res, next) {
  connection.query("select * from category",function(err,tb_rows){
    if(err) throw err;
  //   console.log(tb_rows);
    res.render('tables',{tb_rows_arr:tb_rows});
  })
});


// Delete
router.get('/deletecategory/:id',function(req,res,next){
  var deleteid = req.params.id;
  connection.query("delete from category where category_id = ?",[deleteid],function(err,db_row){
    if(err) throw err;
    res.redirect('/displaycategory');
  })
});




// Edit
router.get('/editcategory/:id', function(req, res, next) {
  var editid = req.params.id;
  connection.query("select * from category where category_id = ?",[editid],function(err,datas){
    if(err) throw err;
    res.render('editForm',{data:datas});
  }) 
});


router.post('/editcat/:id', function(req, res, next) {
  var editid = req.params.id;
  var cname = req.body.txt2;

  // console.log(editid);
  // console.log(cname);

  connection.query("update category set category_name = ? where category_id = ?",[cname,editid],function(err,datas){
    if(err) throw err;
    res.redirect('/displaycategory');
  // res.render('displayCategory');
  }) 

});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

module.exports = router;
