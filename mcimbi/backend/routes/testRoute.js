const testModel = require('../models/testModel')



const test = (app) => {

    app.get('/test', async (req, res) => {
        try {

                const data = await testModel
                // var cleanApi = data

                // const results = cleanApi.map(booking => {
                //     return {
                //         id: booking.id,
                //         name: booking.name,
                //         email: booking.email,
                //         date: booking.date
                //     }
                // })
                res.status(201).json(data)
        }
        catch (e) {
            console.log(e)
        }
    })

}

module.exports = {test}
