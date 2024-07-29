import {
    createContext,
    ReactNode,
    useContext,
    useReducer,
} from "react";
import { AuthContext } from "./AuthContext";
import Usuario from "../models/Usuario";

interface ChatContextProps {
    data: {chatId: string; usuario: Usuario};
    dispatch: React.Dispatch<{type: string; payload: Usuario}>
}

interface ChatProviderProps {
    children: ReactNode
}

export const ChatContext = createContext({} as ChatContextProps);

export const ChatContextProvider = ({ children }: ChatProviderProps) => {
    const { usuario } = useContext(AuthContext);
    const INITIAL_STATE = {
        chatId: "null",
        user: {},
    };

    const chatReducer = (state, action) => {
        switch (action.type) {
            case "CHANGE_USER":
                return {
                    usuario: action.payload,
                    chatId: usuario.id > action.payload.id ? (usuario.id).toString() + (action.payload.id).toString() : (action.payload.id).toString() + (usuario.id).toString(),
                };

            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

    return (
        <ChatContext.Provider value={{ data: state, dispatch }}>
            {children}
        </ChatContext.Provider>
    );
};