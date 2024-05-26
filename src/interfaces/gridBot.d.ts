export type AlreadySelectedPair = {
    "params": {
        "symbol": string,
        "qty": number,
        "side": string,
        "price": number,
        "qtyOpenOrders": number,
        "step": number,
        "decimals": number
    },
    "api": {
        "id": string,
        "name": string,
        "type": string
    },
    "idApi": string,
    "status": string,
    "dateCreated": number,
    "_id": string
}

export as namespace GridBot;