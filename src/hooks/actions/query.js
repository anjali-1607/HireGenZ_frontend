import { QueryClient } from "react-query";

// import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: true,
            retry: false,
            staleTime: 1000 * 60 * 60 * 24 * 365,
        },
    },
});
