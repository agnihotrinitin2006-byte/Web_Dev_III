const jwt=require("jsonwebtoken")

const data={
    _id:"1234567890123456789"
}

const token=jwt.sign(data,"thisissecret",{expiresIn:"10d"})

console.log(token)

const decoded=jwt.verify(token,"thisissecret")
console.log(decoded)