var express = require('express');
var router = express.Router();
var mysql = require('mysql');


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'nodedemo'
});
 

connection.connect(function(err){
  if(!err){
    console.log("DB connected");
  }else{
    console.log("DB not connected")
  }
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/add', function(req, res, next) {
  res.render('add-form', { title: 'Express' });
});
router.post('/form_process', function(req, res, next) {
  // console.log(req.body);

  const myBodyData = {
    product_name: req.body.txt1,
    product_detail: req.body.txt2,
    product_price:req.body.txt3
  }

  connection.query("insert into tbl_product set ?",myBodyData,function(err,result){
    if(err) throw err;
    res.redirect('/add');
  });
  
});

router.get('/display', function(req, res, next) {
  connection.query("select * from tbl_product",function(err,tb_rows){
    if(err) throw err;
    // console.log(tb_rows);
    res.render('result',{tb_rows_arr:tb_rows});
  })
});


// delete record
router.get('/delete/:id',function(req,res,next){
  var deleteid = req.params.id;
  connection.query("delete from tbl_product where product_id = ?",[deleteid],function(err,db_row){
    if(err) throw err;
    res.redirect('/display');
  })
})


//edit record
router.get('/edit/:id', function(req, res, next) {
  var editid = req.params.id;
  connection.query("select * from tbl_product where product_id = ?",[editid],function(err,datas){
    if(err) throw err;
    res.render('edit',{data:datas});
  }) 
});

router.post('/edititems/:id', function(req, res, next) {
    var editid1 = req.params.id;
    var pname = req.body.txt1
    var pdetail = req.body.txt2
    var pprice = req.body.txt3

    console.log(editid1);

    connection.query("update tbl_product set product_name = ?,product_detail = ?,product_price = ? where product_id = ?",[pname,pdetail,pprice,editid1],function(err,datas){
      if(err) throw err;
      res.redirect('/display');
    }) 

});

module.exports = router;
