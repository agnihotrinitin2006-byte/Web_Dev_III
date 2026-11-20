const bcrypt=require("bcrypt");

const password="Jack@1234"
const passwordcopy="Jack@1234"

const excryptPassword=async(password)=>{
    const salt=await bcrypt.genSalt(10);
    console.log("Salt:",salt);
    const hashedPassword=await bcrypt.hash(password,salt);
    console.log("Hashed Password:",hashedPassword);
}

excryptPassword(password);
excryptPassword(passwordcopy);