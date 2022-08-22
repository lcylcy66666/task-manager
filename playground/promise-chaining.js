require('../src/db/mongoose')
const User = require('../src/models/user')

//630217cffe211a932257bec4

User.findByIdAndUpdate('62ffe98d090d561339be77f3',{age: 1}).then((user)=>{
    console.log(user)
    return User.countDocuments({ age: 1})
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})