require("../src/db/mongoose")
const Task = require('../src/models/task')

Task.findByIdAndRemove('630217cffe211a932257bec4', {"description": "Finish Node.js course"}).then((task)=>{
    console.log(task)
    return Task.countDocuments({completed: false})
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})