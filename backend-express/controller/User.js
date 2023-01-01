function hello(req,res,next){
    res.json({
        name :"Hello"
    });
}
module.exports = {
    hello,
}