export interface User{
    accountId: string
    nickname: string
    profileUrl: string
    ranking: number
    mscore: number
    tier: string
    mscores: Mscores[]
}

export interface Mscores{
    ranking: number
    scoreGroup: string
    mscore: number  
}