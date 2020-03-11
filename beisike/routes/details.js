const express=require("express");
const router=express.Router();
const pool=require("../pool");
///details
router.get("/",(req,res)=>{
  //按lid查询商品信息和规格列表
  var lid=req.query.lid;
  console.log(lid);
  //obj={product:{}};
	/*var sql="SELECT * FROM my_best_info";
    
      pool.query(sql,(err,result)=>{
        if(err) console.log(err);
        res.send(result);
       
      })*/
    
  (async function(){
    //1. 按lid查询商品信息——异步
    var sql="SELECT * FROM my_best_info where lid=?";
    await new Promise(function(open){
      pool.query(sql,[lid],(err,result)=>{
        if(err) console.log(err);
        open();
        res.send(result);
      })
    })
	
    /*//2. 按lid查询规格列表——异步
    var sql=`select lid, spec from my_best_info 
    where family_id=(
      select family_id from my_best_info where lid=?)`;
    await new Promise(function(open){
      pool.query(sql,[lid],(err,result)=>{
        if(err) console.log(err);
        obj.specs=result;
        open(); 
      })
    })
    //3. 按lid查询图片列表——异步
    var sql=`select * from my_best_info where laptop_id=?`;
    await new Promise(function(open){
      pool.query(sql,[lid],(err,result)=>{
        if(err) console.log(err);
        obj.pics=result;
        open(); 
      })
    })
    res.send(obj);//4. 返回结果
    //测试: http://localhost:3000/details?lid=5*/
  })()
});

module.exports=router;