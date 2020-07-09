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
                    email: booking.email
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

        var newBooking = new testModel({
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email
        })
        try{
            const dbResults = await newBooking.save();

            const sanitizedBooking = {
                id: dbResults.id,
                name: dbResults.name,
                surname: dbResults.surname,
                email: dbResults.email
            }
            res.send(sanitizedBooking)

        }catch(e) {
            console.log(e)
        }
    })   

}

module.exports = {test}
