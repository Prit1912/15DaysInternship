var express = require('express');
var router = express.Router();
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
    res.render('addCategory');
  });

router.post('/addcate',function(req,res,next){
    const datas = {
        // category_id: req.body.txt1,
        category_name: req.body.txt2
    }

    connection.query("insert into category set ?",datas,function(err,result){
        if(err) throw err;
        res.redirect('/table/addcategory')
    })
});


//display category
router.get('/displaycategory', function(req, res, next) {
    connection.query("select * from category",function(err,tb_rows){
      if(err) throw err;
    //   console.log(tb_rows);
      res.render('displayCategory',{tb_rows_arr:tb_rows});
    })
  });


// Delete
router.get('/deletecategory/:id',function(req,res,next){
    var deleteid = req.params.id;
    connection.query("delete from category where category_id = ?",[deleteid],function(err,db_row){
      if(err) throw err;
      res.redirect('/table/displaycategory');
    })
  });


// Edit
router.get('/editcategory/:id', function(req, res, next) {
    var editid = req.params.id;
    connection.query("select * from category where category_id = ?",[editid],function(err,datas){
      if(err) throw err;
      res.render('editCategory',{data:datas});
    }) 
  });


  router.post('/editcat/:id', function(req, res, next) {
    var editid = req.params.id;
    var cname = req.body.txt2;

    console.log(editid);
    console.log(cname);

    connection.query("update category set category_name = ? where category_id = ?",[cname,editid],function(err,datas){
      if(err) throw err;
      res.redirect('/table/displaycategory');
    // res.render('displayCategory');
    }) 

});



// for user table


// add user

router.get('/adduser', function(req, res, next) {
  res.render('addUser');
});

router.post('/addusr',function(req,res,next){
  const datas = {
      // category_id: req.body.txt1,
      name: req.body.txt1,
      gender: req.body.txt2,
      email: req.body.txt3,
      phone: req.body.txt4,
      address: req.body.txt5,
      password: req.body.txt6
  }

  connection.query("insert into user set ?",datas,function(err,result){
      if(err) throw err;
      res.redirect('/table/adduser')
  })
});


//display User
router.get('/displayuser', function(req, res, next) {
  connection.query("select * from user",function(err,tb_rows){
    if(err) throw err;
  //   console.log(tb_rows);
    res.render('displayUser',{tb_rows_arr:tb_rows});
  })
});


// Delete
router.get('/deleteuser/:id',function(req,res,next){
  var deleteid = req.params.id;
  connection.query("delete from user where user_id = ?",[deleteid],function(err,db_row){
    if(err) throw err;
    res.redirect('/table/displayuser');
  })
});



// Edit
router.get('/edituser/:id', function(req, res, next) {
  var editid = req.params.id;
  connection.query("select * from user where user_id = ?",[editid],function(err,datas){
    if(err) throw err;
    res.render('editUser',{data:datas});
  }) 
});


router.post('/editusr/:id', function(req, res, next) {
  var editid = req.params.id;
      var name = req.body.txt1;
      var gender = req.body.txt2;
      var email = req.body.txt3;
      var phone = req.body.txt4;
      var address = req.body.txt5;
      var password = req.body.txt6;


  connection.query("update user set name = ?, gender = ?,email = ?,phone = ?,address = ?,password = ? where user_id = ?",[name,gender,email,phone,address,password,editid],function(err,datas){
    if(err) throw err;
    res.redirect('/table/displayuser');
  // res.render('displayCategory');
  }) 

});

module.exports = router;