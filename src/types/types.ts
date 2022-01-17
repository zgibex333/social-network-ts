export type StoreType = {
    _state: stateType
    _callSubscriber: Function & {}
    subscribe: (arg: Function) => void
    getState: () => stateType
    dispatch: (action: any) => void
}

export type ActionType = {
    [key: string]: any
}

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
    dialoguesMessage: string
}

export type profilePageType = {
    postsData: Array<postItem>
    newPostText: string
}

export type stateType = {
    messagesPage: messagesPageType
    profilePage: profilePageType
}
