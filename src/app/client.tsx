"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";



const Client = () => {
    const trpc = useTRPC();
    const { data } = useSuspenseQuery(trpc.createAI.queryOptions({
        text: "GERAAAAA Prefectch",
    }));

    return ( 
        <div className="flex items-center justify-center h-screen">
            {JSON.stringify(data, null, 2) || "Loading..."}
        </div>
    );
}

export default Client;