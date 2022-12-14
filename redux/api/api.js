
export const BASE = 'http://localhost:8080/api/v1'


export const ApiCalls = {
    // signin 
    async userSigninAccount(payload) {
        const resp = await fetch(BASE + '/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })

        return resp.json()
    },

    // get wallet info
    async walletInfo(userid) {
        const payload = {
            acction: "wallet_info",
            wallet: {
                user_id: userid
            }
        }
        const resp = await fetch(BASE, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        return resp.json()
    }
}