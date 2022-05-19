const express=require('express');
const app= express();
const greetings= 'hello how are you';



app.get('/greetings/:name', function (request, response) {
    response.send(greetings+ ' '+ request.params.name);
});

app.get("/tip/:total/:tipPercentage", function(request, response){
	var n1 = request.params.total; 
	var n2 = request.params.tipPercentage; 
    var sum= n1 / n2;
    console.log(sum);
	response.send(sum + '');
});

app.listen(8080, function (){
    console.log('listening on port 8080')
})