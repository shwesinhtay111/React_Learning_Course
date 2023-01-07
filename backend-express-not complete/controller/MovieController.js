function getAllMoive(req,res,next){
    let movies = [
        {
            name:"Titanic",
            director: {
                name: "Jame Cameron"
            }
        }
    ];
    res.status(200).json(movies);
}
module.exports ={
    getAllMoive,
}