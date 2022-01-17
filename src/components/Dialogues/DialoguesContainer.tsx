import {
    addMessageActionCreator,
    updateNewMessageTextActionCreator,
} from '../../redux/reducers/dialogs-reducer'
import { StateType, StoreType } from '../../redux/redux-store'
import { Dialogues } from './Dialogues'
import { connect } from 'react-redux'

// export const DialoguesContainer = ({ store }: { store: StoreType }) => {
//     let state = store.getState()
//     const updateMessageHandler = (text: string) => {
//         store.dispatch(updateNewMessageTextActionCreator(text))
//     }
//
//     const addMessageHandler = () => {
//         store.dispatch(addMessageActionCreator())
//     }
//
//     return (
//         <Dialogues
//             dialoguesData={state.dialogsPage.dialoguesData}
//             dialoguesContents={state.dialogsPage.dialoguesContents}
//             dialoguesMessage={state.dialogsPage.dialoguesMessage}
//             updateMessage={updateMessageHandler}
//             addMessage={addMessageHandler}
//         />
//     )
// }

const stateToProps = (state: StateType) => {
    return {
        dialoguesData: state.dialogsPage.dialoguesData,
        dialoguesContents: state.dialogsPage.dialoguesContents,
        dialoguesMessage: state.dialogsPage.dialoguesMessage,
    }
}
const dispatchToProps = (dispatch: any) => {
    return {
        updateMessage: (text: string): void => {
            dispatch(updateNewMessageTextActionCreator(text))
        },
        addMessage: (): void => {
            dispatch(addMessageActionCreator())
        },
    }
}

export const DialoguesContainer = connect(
    stateToProps,
    dispatchToProps
)(Dialogues)
