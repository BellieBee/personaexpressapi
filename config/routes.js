import { Router } from 'express'
import personasController from '../controllers/PersonasController'

const router = new Router()

// Obtiene ejercicios disponibles
router.get('/personas', personasController.index)

// Crea un nuevo ejercicio
router.post('/personas', personasController.store)

// Obtiene detalles del ejercicio
router.get('/personas/:id', personasController.details)

export default router
