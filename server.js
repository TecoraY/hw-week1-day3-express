const express=require('express');
const app= express();
const greetings= 'hello how are you';


app.get('/greetings/:name', function (req, res) {
    res.send(greetings+ ' '+ req.params.name);
});

app.listen(8080, function (){
    console.log('listening on port 8080')
})