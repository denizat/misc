import { ParsedMessage } from "./message";

export interface Handler {
    initialConnection: Function,
    onMessage: (message: ParsedMessage, thisUuid: string) => void,
    onClose: Function,
}
