"use client";

import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";


const HomePage =() => {
  // Hook to access TRPC client
  const trpc = useTRPC();

  // Aqui se define la mutación para invocar la función helloWorld
  const invoke = useMutation(trpc.invoke.mutationOptions({
    onSuccess: () => {
      toast.success("Function invoked successfully!");
    }
  }))

  return (
    <div className="p-4 max-w-7xl mx-auto text-center">
      <Button
        disabled={invoke.isPending} 
        onClick={() => invoke.mutate({
          text: "Hello Test"
        })}
      >
        Invoke Function
      </Button>
    </div>
  );
}

export default HomePage;