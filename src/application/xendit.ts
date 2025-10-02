import { env } from "process"
import {Xendit,PaymentRequest} from "xendit-node"
import { PaymentRequestParameters } from "xendit-node/payment_request/models"

export const xenditClient = new Xendit({
    secretKey: "xnd_development_ChjBUPtJa47D5ZNNWmtKCKWc6OrH83zkHwZuHwNJ2zMRsqAsZJAhcKCGDOljO"
})



