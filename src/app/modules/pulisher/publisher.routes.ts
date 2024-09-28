import express from 'express'
import { publisherControllers } from './publisher.controller'
import validateRequest from '../../middleware/validateRequest'
import { publisherValidationSchemas } from './publisher.validation'

const routes = express.Router()

// get all publisher
routes.get("/", publisherControllers.getAllPublisher)

// get publisher by id
routes.get("/:publisherId", publisherControllers.getPublisherById)

// create publisher 
routes.post("/", validateRequest(publisherValidationSchemas.createPublisherValidationSchema), publisherControllers.createPublisher)

// update publisher by id
routes.patch("/:publisherId", validateRequest(publisherValidationSchemas.updatePublisherValidationSchema), publisherControllers.updatePublisherById)

// delete publisher by id
routes.delete("/:publisherId", publisherControllers.deletePublisherById)


// export publisher routes
export const publisherRoutes = routes