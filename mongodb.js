// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectId

const {MongoClient, ObjectId} = require('mongodb')

const connectionURL ='mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectId()
// console.log(id.id.length)
// console.log(id.getTimestamp())
// console.log(id.toHexString().length)

MongoClient.connect(connectionURL, {useNewURLParser: true}, (error, client)=>{
    if(error){
        return console.log('Unable to connect to DB!')
    }

    const db = client.db(databaseName)

    // db.collection('users').deleteMany({
    //     age:27
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error))=>{
    //     console.log(error)
    // }

    db.collection('tasks').deleteOne({
        _id: new ObjectId("62f10ccab2db925a983f68bb")
    }).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    })
})