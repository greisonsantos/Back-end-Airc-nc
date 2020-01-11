
const Spot = require('../models/Spot')
const Booking = require('../models/Booking')

module.exports = {

  async storage(req, res) {
    const { user_id } = req.headers
    const { spot_id } = req.params
    const { date } = req.body

    const booking = await Booking.create({
      user: user_id,
      spot_id: spot_id,
      date: date
    })

    await booking.populate('spot').populate('user').execPopulate()

    return res.json(booking)
  }
}