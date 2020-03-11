SET NAMES UTF8;
DROP DATABASE IF EXISTS my_best;
CREATE DATABASE my_best CHARSET UTF8;
USE my_best;

/**商品详情**/
CREATE TABLE my_best_info(
  lid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(16),
  price_now DECIMAL(10,2),
  price_old DECIMAL(10,2),
  num INT,
  pic VARCHAR(128)
);

INSERT INTO my_best_info VALUES
(1,"小沙皮",198,198,300,"img/gou.jpg"),
(2,"星座蛋糕",198,198,50,"img/xz.jpg"),
(3,"牛乳糖",198,198,100,"img/r2.png"),
(4,"吉致生巧",88,118,280,"img/吉致生巧.png"),
(5,"金装云顶曲奇",58,108,300,"img/金装云顶曲奇.png"),
(6,"茶色生香",118,198,100,"img/茶色生香.png"),
(7,"沃尔夫斯堡之春",118,198,80,"img/new-indexsale沃尔夫斯堡之春.png"),
(8,"极地牛乳",198,208,50,"img/new-index-p极地牛乳.png"),
(9,"情定爱情海",198,280,50,"img/new-index-p情定爱情海.png"),
(10,"白色红丝绒",198,280,50,"img/new-index-p白色红丝绒.png"),
(11,"旧时光",198,280,40,"img/new-index-p旧时光.png"),
(12,"双果小确幸",198,280,80,"img/new-index-p双果小确幸.png"),
(13,"露水茶颜",198,280,120,"img/new-index-p露水茶颜.png"),
(14,"红莓森林",218,228,110,"img/new-index-p红莓森林.png"),
(15,"歌剧魅影",218,228,150,"img/new-index-p歌剧魅影.png"),
(16,"酸奶芝士",218,228,90,"img/new-index-p酸奶芝士.png"),
(17,"布朗尼精灵",198,208,150,"img/布朗尼精灵.png"),
(18,"PAPI熊蛋糕",198,208,150,"img/PAPI熊蛋糕.png"),
(19,"金色榴莲",198,208,130,"img/金色榴莲.png"),
(20,"茶色生香",198,208,150,"img/茶色生香.png"),
(21,"情定爱情海",198,208,100,"img/new-index-p情定爱情海.png"),
(22,"PAPI熊蛋糕",198,208,150,"img/new-index-p新狮子王.png"),
(23,"落莓恋曲",198,208,110,"img/落莓恋曲.png"),
(24,"莓酒冰影",198,208,90,"img/莓酒冰影-1.jpg");

/**用户信息**/
CREATE TABLE my_best_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16),
  avatar VARCHAR(128),
  user_name VARCHAR(32),
  gender INT
);
INSERT INTO my_best_user VALUES
(NULL, 'dingding', '123456', 'ding@qq.com', '13501234567', 'img/personal_1.png', '丁伟', '1'),
(NULL, 'dangdang', '123456', 'dang@qq.com', '13501234568', 'img/personal_1.png', '林当', '1'),
(NULL, 'doudou', '123456', 'dou@qq.com', '13501234569', 'img/personal_1.png', '窦志强', '1'),
(NULL, 'yaya', '123456', 'ya@qq.com', '13501234560', 'img/personal_1.png', '秦小雅', '0');



