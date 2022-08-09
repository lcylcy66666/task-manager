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

    // db.collection('users').findOne({_id:new ObjectId("62f11225b3e14a5f739e79fe")},(error, user)=>{
    //     if(error){
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({age:25}).toArray((error, users) =>{
    //     console.log(users)
    // })

    // db.collection('users').countDocuments({age:25}, (error, count) =>{
    //     console.log(count)
    // })
        db.collection('tasks').findOne({_id: new ObjectId("62f10ccab2db925a983f68bc")},(error, task)=>{
            console.log(task)
        })

        db.collection('tasks').find({completed: false}).toArray((error, tasks)=>{
            console.log(tasks)
        })
    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Brian',
    //     age: 25
    // }, (error, result)=>{
    //     if(error){
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.insertedId)
    // })
    
    // db.collection('users').insertMany([
    //     {
    //         name:'Jen',
    //         age:28
    //     },{
    //         name:' GIM',
    //         age:29
    //     }
    // ],(error, result)=>{
    //     if(error){
    //         return console.log('Unable to insert documents!')
    //     }

    //     console.log(result.insertedIds)

    // })

    //challenge
    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     },{
    //         description: "Renwe inspection",
    //         completed:false
    //     },{
    //         description: 'Pot plants',
    //         completed:false
    //     }
    // ],(error, result)=>{
    //     if(error){
    //         return console.log("Unable to insert tasks")
    //     }
    //     console.log(result.insertedIds)
    // })


})