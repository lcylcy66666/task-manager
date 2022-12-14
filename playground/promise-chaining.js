require('../src/db/mongoose')
const User = require('../src/models/user')
const Task = require('../src/models/task')

// User.findByIdAndUpdate('62ffe98d090d561339be77f3',{age: 1}).then((user)=>{
//     console.log(user)
//     return User.countDocuments({ age: 1})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })


// const updateAgeAndCount = async(id, age)=>{
//     const user = await User.findByIdAndUpdate(id, {age: age})
//     const count = await User.countDocuments({age})
//     return count 
// }

// updateAgeAndCount('62ffe98d090d561339be77f3', 2).then((count)=>{
//     console.log(count)
// }).catch((e)=>{
//     console.log(e)
// }) 

const deleteTaskAndCount = async(id)=>{
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount('630217cffe211a932257bec4').then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})