var http=require("http");
var url=require("url");
var querystring=require("querystring");
var path=require('./Calculatorjs.js');

var server=http.createServer(function(req,res){
    var rurl=url.parse(req.url);
    var q=querystring.parse(rurl.query);
    if(rurl.pathname=="/add")
    {
        res.writeHead(200,{"content-type":"text/html"});
        res.write("<html><body><i><h1>Addtion of "+q['num1']+" and "+q['num2']+" is</h1></i>");
        res.write("<html><body><i><h1>"+path.add(q['num1'],q['num2'])+"</i></h1></body></html>");
        res.end();
    }

    else if(rurl.pathname=="/sub")
    {
        res.writeHead(200,{"content-type":"text/html"});
        res.write("<html><body><i><h1>Subtraction of "+q['num1']+" and "+q['num2']+" is</h1></i>");
        res.write("<html><body><i><h1>"+path.sub(q['num1'],q['num2'])+"</i></h1></body></html>");
        res.end();
    }

    else if(rurl.pathname=="/mul")
    {
        res.writeHead(200,{"content-type":"text/html"});
        res.write("<html><body><i><h1>Multiplication of "+q['num1']+" and "+q['num2']+" is</h1></i>");
        res.write("<html><body><i><h1>"+path.mul(q['num1'],q['num2'])+"</i></h1></body></html>");
        res.end();
    }

    else if(rurl.pathname=="/div")
    {
        res.writeHead(200,{"content-type":"text/html"});
        res.write("<html><body><i><h1>Division of "+q['num1']+" and "+q['num2']+" is</h1></i>");
        res.write("<html><body><i><h1>"+path.div(q['num1'],q['num2'])+"</i></h1></body></html>");
        res.end();
    }

    else if(rurl.pathname=="/mod")
    {
        res.writeHead(200,{"content-type":"text/html"});
        res.write("<html><body><i><h1>Modulus of "+q['num1']+" and "+q['num2']+" is</h1></i>");
        res.write("<html><body><i><h1>"+path.mod(q['num1'],q['num2'])+"</i></h1></body></html>");
        res.end();
    }

    else if(rurl.pathname=="/pow")
    {
        res.writeHead(200,{"content-type":"text/html"});
        res.write("<html><body><i><h1>Power of "+q['num1']+" and "+q['num2']+" is</h1></i>");
        res.write("<html><body><i><h1>"+path.pow(q['num1'],q['num2'])+"</i></h1></body></html>");
        res.end();
    }

    else
    {
        res.end("Invalid url");
    }

});

server.listen(2222);
console.log("Server running");