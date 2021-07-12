export const getMessagesState = (state) => state.messages;
export const getRecentConversations = (state) => getMessagesState(state).recentConversations;
