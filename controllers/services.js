const servicesRouter = require('express').Router()
const credentialsExtractor = require('../midelwares/credentialsExtractor')

// Modelos
const Service = require('../models/Service')
const Restaurant = require('../models/Restaurant')

// Obtener todos los servicios
servicesRouter.get('/', async (request, response, next) => {
  const services = await Service.find({}).populate({ path: 'categories', select: 'name' })
  response.json(services)
})

// Crear un nuevo servicio
servicesRouter.post('/', credentialsExtractor, async (request, response, next) => {
  const { name, start, end } = request.body
  const { userId } = request
  if (!name || !start || !end) {
    return response.status(400).json({
      error: 'some service property is missing'
    })
  }

  const newService = new Service({
    name,
    start,
    end
  })
  try {
    const restaurant = await Restaurant.findById(userId)
    console.log(restaurant.services.length)
    if (restaurant.services.length >= 3) {
      return response.status(400).json({
        error: 'Limit of services exceeded'
      })
    }
    const savedService = await newService.save()
    await Restaurant.findByIdAndUpdate(userId, {
      $addToSet: {
        services: savedService._id
      }
    }, { new: true })
    response.json(savedService)
  } catch (error) {
    next(error)
  }
})

module.exports = servicesRouter
