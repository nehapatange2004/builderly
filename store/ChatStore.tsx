import {create} from "zustand"
interface ChatStore  {
    messages: Object[],
    addMessage: (msg: any) => void,
    isStreaming: Boolean,
    setStreaming: (status: boolean) => void,

}
export const useChatStore = create<ChatStore>((set) => ({
  messages: [
    {
        user: "user",
        content: "ehy there"
    },
    {
        user: "bot",
        content: "ohhh you"
    },
    {
        user: "user",
        content: "yeah me.."
    },
    {
        user: "bot",
        content: "wanna ask anything"
    },
    {
        user: "user",
        content: "yeap.."
    },
    {
        user: "bot",
        content: "wokay ask then..??"
    },
    {
        user: "user",
        content: "what id diff betwn 3 and 6"
    },
    {
        user: "bot",
        content: "well.. not answering that"
    },
  ],
  isStreaming: false,
  addMessage: (msg) => set((state) => ({ messages: [...state.messages, msg] })),
  setStreaming: (status) => set({ isStreaming: status }),
}));
