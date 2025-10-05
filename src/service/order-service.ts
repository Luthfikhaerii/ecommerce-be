import { prisma } from "../application/database";

export class Order{
    static async getOrder(){
        const data = await prisma.order.findMany()
        return data
    }

    static async getOrderById(id:number,body:any){
        // const data = await prisma.order.create({
        //     data: {
                
        //     }
        // })
    }
}