const mongoose = require('mongoose')
const validator = require('validator')
const { default: isEmail } = require('validator/lib/isEmail')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')

const User = mongoose.model('User',{
    name: {
        type: String,
        required: true,
        trim: true
    },
    email:{
        type:String,
        required:true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid!')
            }
        }
    },
    password:{
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value){
            if(value.includes("password")){
                throw new Error('Password can not same as the "password"!')
            }
        } 
    },
    age: {
        type: Number,
        default: 0,
        validate(value){
            if(value<0){
                throw new Error('Age must larger than 0')
            }
        }
    }
})

const me = new User({
    name: '     Brian',
    email: 'BRIANLIN@gmail.com      ',
    password: '    !fasdsd443634 '
})

me.save().then(()=>{
    console.log(me)
}).catch((error)=>{
    console.log("Error!", error)
})

const Task = mongoose.model('Task', {
    description:{
        type: String
    },
    completed:{
        type: Boolean
    }
})

// const task = new Task({
//     description: 'Learn the mongosoe library',
//     completed: false
// })

// task.save().then(()=>{
//     console.log(task)
// }).catch((error)=>{
//     console.log(error)
// })