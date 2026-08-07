const jwt = require("jsonwebtoken")

async function authArtist(req, res, next){

    const token = req.cookies.token

    if(!token){
        return res.status(401).json({ message: "Unauthorized"})
    }

    try{

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if(decoded.role !== 'artist'){
            return res.status(403).json({ message:"You don't have access"})
        }

        req.user = decoded

        next()

    } catch(err){

        console.error("Error in artist authentication : ", err)

        return res.status(401).json({message:"Unauthorized"})
    }
}

async function authUser(req, res, next){

    const token = req.cookies.token
    if(!token){
        return res.status(401).json({message: "Unauthorized request"})
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if(decoded.role !== "user"){
            return res.statu(403).json({ message: "You don't have access" })
        }

        req.user = decoded

        next()

    } catch(err){

        console.log("Error in user authentication : ", err)

        return res.status(403).json({
            message: "Unauthorized user"
        })
    }
}

module.exports = { authArtist, authUser }