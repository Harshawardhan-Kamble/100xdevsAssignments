import { atom, selector } from "recoil"

export const networkCount=atom({
    key:"networkCount",
    default:15
})
export const jobsCount=atom({
    key:"jobsCount",
    default:3
})
export const messageCount=atom({
    key:"messageCount",
    default:6
})
export const notificationCount=atom({
    key:"notificationCount",
    default:12
})
export const totalSelector=selector({
    key:"totalSelector",
    get:({get})=>{
        const network=get(networkCount)
        const notification=get(notificationCount)
        const message=get(messageCount)
        const jobs=get(jobsCount)
        return (network+notification+message+jobs)
    }
})