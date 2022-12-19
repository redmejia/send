
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
    async userRegisterNewAccount(payload) {
        const resp = await fetch(BASE + '/register', {
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
    },

    async transferToWallet(txIntent) {
        const payload = {
            acction: "transfer_to_wallet",
            transfer: {
                transafer_founds: {
                    username: txIntent.username,
                    user_id: txIntent.user_id,
                    wallet_id: txIntent.wallet_id,
                    amount: parseInt(txIntent.amount, 10)
                }
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
    },
    // add contact by share id 
    async contactWalletInfo(shareid) {
        const payload = {   
            acction : "share_wallet_info",
            wallet: {
                share_id : shareid 
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


    },

    // Transfer wallet to wallet
    async wallet2Wallet(txIntent){
        
        const payload = {   
            acction : "wallet_to_wallet",
            transfer: {
                sender : {
                    username : txIntent.sender.username,
                    user_id : txIntent.sender.user_id,
                    src_wallet_id : txIntent.sender.wallet_id,
                    amount : parseInt(txIntent.sender.amount, 10)
                },
                reciver : {
                    username : txIntent.reciver.username,
                    dst_wallet_id: txIntent.reciver.wallet_id 
                }
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