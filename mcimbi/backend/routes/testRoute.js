const testModel = require('../models/testModel')



const test = (app) => {

    app.get('/test', async (req, res) => {
        try {
            const data = await testModel.find()

            const results = data.map(booking => {
                return {
                    id: booking.id,
                    name: booking.name,
                    surname: booking.surname,
                    email: booking.email,
                    event: booking.event
                }
            })
            res.status(201).json(results)
        }
        catch (e) {
            console.log(e)
        }
    })
   

    app.post('/test', async (req, res) => {

        const comparedBookings = await testModel.find()
        for (var i in comparedBookings) {
            if(req.body.surname.toUpperCase().trim() == comparedBookings[i].surname.toUpperCase().trim()){
                return res.status(400).json("Surname already exists")
            }
            if(req.body.name.toUpperCase().trim() == comparedBookings[i].name.toUpperCase().trim()){
                return res.status(400).json("Opps looks like your name is taken.. try a different one")
            }
            if(req.body.email.toUpperCase().trim() == comparedBookings[i].email.toUpperCase().trim()){
                return res.status(400).json("Email already exists")
            }
        }
        if (req.body.name == "" && req.body.surname) {
            return res.status(400).json("Name and Surname are required")
        }
        if (req.body.email == ""){
            return res.status(400).json("Email is required")
        }
        if (req.body.surname == "") {
            return res.status(400).json("Surname is required")
        }
        var newBooking = new testModel({
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            event: req.body.event,
        })
        try{
            const dbResults = await newBooking.save();

            const sanitizedBooking = {
                id: dbResults.id,
                name: dbResults.name,
                surname: dbResults.surname,
                email: dbResults.email,
                event: dbResults.event,
            }
            res.send(sanitizedBooking)

        }catch(e) {
            console.log(e)
        }
    })   

}

module.exports = {test}
