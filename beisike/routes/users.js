const express=require("express");
const router=express.Router();
const pool=require("../pool");

//登录
router.post("/signin",(req,res)=>{
  var phone=req.body.phone;
  var upwd=req.body.upwd
  console.log(phone,upwd)
  var sql="select * from my_best_user where phone=? and upwd=?";
  pool.query(sql,[phone,upwd],(err,result)=>{
    if(err) throw error;
    console.log(result);
    res.writeHead(200,{
      "Content-Type":"application/json;charset=utf-8",
      "Access-Control-Allow-Origin":"*"
    });
    if(result.length>0){
      //req.session.uid=result[0].uid;
      res.write(JSON.stringify({ok:1}))
    }else
      res.write(JSON.stringify({
        ok:0, msg:"电话号码或密码错误"
      }))
    res.send();
  })
})

//注册
router.post("/register",(req,res)=>{
  var phone=req.body.phone;
  var upwd=req.body.upwd;
  console.log(phone,upwd)
  var sql="select * from my_best_user where phone=? and upwd=?";
  pool.query(sql,[phone,upwd],(err,result)=>{
    if(err) throw error;
    console.log(result);
    res.writeHead(200,{
      "Content-Type":"application/json;charset=utf-8",
      "Access-Control-Allow-Origin":"*"
    });
    if(result.length>0){
      res.write(JSON.stringify({ok:1}))
    }else
      res.write(JSON.stringify({
        ok:0, msg:"电话号码或密码错误"
      }))
    res.send();
  })
})
module.exports=router;
/*
router.get("/islogin",(req,res)=>{
  if(req.session.uid!==undefined){
    var uid=req.session.uid;
    var sql="select * from my_best_user where uid=?";
    pool.query(sql,[uid],(err,result)=>{
      if(err) console.log(err);
      res.send({ok:1,phone:result[0].phone})
    })
  }else{
    res.send({ok:0})
  }
})
//注销
router.get("/signout",(req,res)=>{
 req.session.uid=undefined;
 res.send();
})*/

