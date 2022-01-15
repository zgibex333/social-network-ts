export type dialoguesItem = {
    name: string
    id: number
}

export type dialoguesMessage = {
    name: string
    id: number
}

export type postItem = {
    message: string
    id: number
    likesCount: number
}

export type messagesPageType = {
    dialoguesData: Array<dialoguesItem>
    dialoguesContents: Array<dialoguesMessage>
}

export type profilePageType = {
    postsData: Array<postItem>
    newPostText: string
}

export type stateType = {
    messagesPage: messagesPageType
    profilePage: profilePageType
}

