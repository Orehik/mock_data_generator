interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    hotInitialState?: any;
    contextProvider: () => Record<string, { value: string; isDisplayable: boolean }>;
    callContext: () => void;
    lcw: () => Record<string, unknown>;
    Microsoft?: {
        Omnichannel?: {
            LiveChatWidget?: {
                SDK: {
                    closeChat: () => void; // Closes the chat session
                    setContextProvider: (provider: () => Record<string, { value: string; isDisplayable: boolean }>) => void;
                };
            };
        };
    };
}

type Nullable<T> = {
    [P in keyof T]: T[P] | null;
};