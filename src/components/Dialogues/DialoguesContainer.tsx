import {
    addMessageActionCreator,
    InitialStateType,
    updateNewMessageTextActionCreator,
} from '../../redux/reducers/dialogs-reducer'
import { StateType } from '../../redux/redux-store'
import { Dialogues } from './Dialogues'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

type DispatchToPropsType = {
    updateMessage: (text: string) => void
    addMessage: () => void
}

const stateToProps = (state: StateType): InitialStateType => {
    return {
        dialoguesData: state.dialogsPage.dialoguesData,
        dialoguesContents: state.dialogsPage.dialoguesContents,
        dialoguesMessage: state.dialogsPage.dialoguesMessage,
    }
}
const dispatchToProps = (dispatch: Dispatch): DispatchToPropsType => {
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

export type DialoguesPropsType = DispatchToPropsType & InitialStateType
