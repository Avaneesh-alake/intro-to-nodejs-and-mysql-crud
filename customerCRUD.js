
const { SIGQUIT } = require('constants');
var mysql=require('mysql');

//Connect A Connection
var con=mysql.createConnection({
host:"localhost",
user:"root",
password:"avaneesh",
database:"nodedb",
port:3000
});


//Connect To Mysql
con.connect(function(err){
    if(err) throw err;
    console.log("Successfully connected to the database");

    //show databases
    // con.query("SHOW DATABASES",function(err,result){
    //     if(err) throw err;
    //     console.log("Database Created!!");
    //     console.log(result);
    // });
    //create databases
    // con.query("CREATE DATABASE nodedb",function(err,result){
    //     if(err) throw err;
    //     console.log("Database Created!!");
    //     console.log(result);
    // });

    //alter table add column
    // var sql="ALTER TABLE customers ADD COLUMN location VARCHAR(255)";
    // con.query(sql, function(err,result){
    //     if(err) throw err;
    //     console.log("Table has been successfully altered");
    // });
    //create table
    // var sql="CREATE TABLE customers(id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255), email VARCHAR(255))";
    // con.query(sql,function(err,result){
    //     if(err) throw err;
    //     console.log("table has been created...");
    //     console.log(result);
    // });

    //insert new value to the database
    // var insertinto = "INSERT INTO customers (name,email,location) VALUES('Avanesh','avaneesh@gmail.com','india')"
    // con.query(insertinto, function(err,result){
    //     if(err)throw err;
    //     console.log("INSERT operation performed successfully");
    // });


    //muliple entry
    // var insert_many = "INSERT INTO customers (name,email,location) VALUES ?";
    // var values = [
    //     ['ashwin','ashwin@gmail.com','shimoga'],
    //     ['karthik','karthik@gmail.com','manglore'],
    //     ['medhini','medhini@gmail.com','mysore'],
    //     ['ajay','ajay@gmail.com','delhi']
    // ]
    // con.query(insert_many,[values],function(err,result){
    //     if(err) throw err;
    //     console.log("Records inserted" + result.affectedRows);
    // });


    //RESULT MESSAGES
    // var resultToShow = "INSERT INTO customers (name, email) VALUES ('Steve', 'steve@steve.com')";	
    // 	con.query(resultToShow, function (err, result) {
    // 		if (err) throw err;
    // 		console.log(result); });

    // Deleting the entry
    // var deleteByid = "DELETE FROM customers WHERE id=?";
    // var ID=[['6']]
    // con.query(deleteByid,[ID], function(err,result,fields){
    //     if(err) throw err;
    //     console.log("DELETED SUCCESSFULLY");
    //     console.log(result);
    // });

    //Drop table 
    // var dropTable = "DROP TABLE IF EXISTS customers";
    // con.query(dropTable, function(err,result,fields){
    //     if(err) throw err;
    //     console.log(result);
    // });

//selecting customers
var selectCustomer = "SELECT * FROM customers";
con.query(selectCustomer,function(err,result,fields){
    if(err) throw err;
    var i;
    for(i = 0; i< result.length;i++){
            console.log(result[i].name);
    };
    console.log(result.length);
	// console.log(fields);
});
// select specific data
var selectbyEmail = "SELECT id,name,email FROM customers";
con.query(selectbyEmail, function(err,result,fields){
    if(err) throw err;
    console.log(result);
});

var querySelect="SELECT * FROM customers";
con.query(querySelect, function(err,result,fields){
    if(err) throw err;
    //fields show the attribute names
    console.log(fields[0].name);
    console.log(fields[1].name);
    console.log("---------------------");
    console.log(result[0].name);
    console.log(result[0].email);
    console.log(result[1].name);
    console.log(result[2].name);
});

//WHERE QUERY - AND, OR, LIKE
    var name_search = 'A%'
    var id_search = 100;
    var search="SELECT * FROM customers WHERE name LIKE ? or id=?";
    con.query(search,[name_search,id_search],function(err,result,fields){
        if(err) throw err;
        console.log(result);
    });

    //ORDER BY
    var orderBy="SELECT name,id FROM customers ORDER BY name"; //ORDER BY (name, id, location, ASC, DESC)
    con.query(orderBy, function(err,result){
        if(err) throw err;
        console.log(result);
    });

    //update query
    // var update = "UPDATE customers SET name='Avaneesh A'WHERE id= 1";
    // con.query(update,function(err,result){
    //     if(err) throw err;
    //     console.log(result);
    // });

    //Limit 
    var Limit = "SELECT * FROM customers ORDER BY id DESC LIMIT 2";
    con.query(Limit,function(err,result){
        if(err) throw err;
        console.log(result);
    })

});