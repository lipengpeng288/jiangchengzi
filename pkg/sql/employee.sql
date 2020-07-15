#设置客户端连接服务器使用utf8编码
SET NAMES UTF8;
#丢弃数据库employee，如果存在的话
DROP DATABASE IF EXISTS employee;
#创建数据库employee，使用utf8字符集
CREATE DATABASE employee CHARSET=UTF8;
#进入数据库employee
USE employee;
/**创建商品模块相关的表**/
/**创建用户模块相关的表**/
#部门信息表department
CREATE TABLE department(
  did INT PRIMARY KEY AUTO_INCREMENT,
  dname VARCHAR(32),
  parent VARCHAR(32),
  createdAt BIGINT
);
INSERT INTO department VALUES
(1,'生产部', null, null),
(2,'研发部',null, null),
(3,'制剂研发部','研发部', null),
(4,'原料药研发部','研发部', null),
(5,'技术部','研发部', null),
(6,'财务部',null, null),
(7,'采购部',null, null),
(8,'销售部',null, null),
(9,'原料药分析部','研发', null),
(10,'质量保证部',null, null),
(11,'质量分析部',null, null),
(12,'物流部',null, null),
(13,'市场部',null, null);

CREATE TABLE staff(
    sid INT PRIMARY KEY AUTO_INCREMENT,
    sname VARCHAR(32),
    sex VARCHAR(32),
    cardId INT,
    birthday VARCHAR(32),
    phone INT,
    emergency_contact VARCHAR(32),
    emergency_phone INT,
    living_place VARCHAR(32),
    registered_place VARCHAR(32),
    education VARCHAR(256), #json字符串
    work_experiences VARCHAR(256), #json字符串
    certificates VARCHAR(256), #json字符串
    files VARCHAR(256) #json字符串
);
