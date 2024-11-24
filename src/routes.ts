import {FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify"
import { CreateCostumerController } from './controllers/CreateCustomerController'
import { ListCurtomerController } from './controllers/ListCurtomerController'
import { DeleteCustomerController} from './controllers/DeleteCustomerController'

export async function routes (fastify:FastifyInstance, options: FastifyPluginOptions) {

    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok : true}
    })

    fastify.post("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCostumerController().handle(request, reply)
    } )

    fastify.get("/customers", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListCurtomerController().handle(request, reply)
    } )

    fastify.delete("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteCustomerController().handle(request, reply)
    } )


    
}