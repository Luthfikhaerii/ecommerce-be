import { Invoice as InvoiceClient } from "xendit-node"
import { Invoice, CreateInvoiceRequest } from "xendit-node/invoice/models"
import { Router } from "express"
import { xenditClient } from "../application/xendit"

const xenditInvoice = new InvoiceClient({
    secretKey: "xnd_development_ChjBUPtJa47D5ZNNWmtKCKWc6OrH83zkHwZuHwNJ2zMRsqAsZJAhcKCGDOljO"
})


export const paymentRouter = Router()

paymentRouter.get("/transaction", async (req, res) => {

    const data: CreateInvoiceRequest = {
        "amount": 10000,
        "invoiceDuration": 172800,
        "externalId": "test1234",
        "description": "Test Invoice",
        "currency": "IDR",
        "reminderTime": 1
    }

    const response: Invoice = await xenditInvoice.createInvoice({
        data
    })
    res.send(response)
})

paymentRouter.get("/transaction", async (req, res) => {

    const data: CreateInvoiceRequest = {
        "amount": 10000,
        "invoiceDuration": 172800,
        "externalId": "test1234",
        "description": "Test Invoice",
        "currency": "IDR",
        "reminderTime": 1,
        "successRedirectUrl": "http://localhost:3000/api/payment/get_transaction",
        "failureRedirectUrl":  "http://localhost:3000/api/payment/get_transaction"
    }

    const response: Invoice = await xenditInvoice.createInvoice({
        data
    })
    res.send(response)
})
paymentRouter.get("/get_transaction", async (req, res) => {

    const response: Invoice = await xenditInvoice.getInvoiceById({
        invoiceId: "68de99230119a81076d0a578",
    })
    console.log(res)
    console.log(req)
    res.redirect("/mpruy")
})

