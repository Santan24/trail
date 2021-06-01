const mongoose=require('mongoose')
const userSchema = mongoose.Schema({
        username:{
                 type:String
        },
        password:{
                  type:String
        },
        email:{
            type:String
        },
        phoneNo:{
            type:Number
        }
})

const User= mongoose.model('User', userSchema)
module.exports={User}