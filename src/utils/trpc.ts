// src/utils/trpc.ts
import { createTRPCNext } from "@trpc/next";
import { AppRouter } from "../server/api/routers/appRouter"; // Your AppRouter

const trpc = createTRPCNext<AppRouter>({
  config() {
    return {
      url: "/api/trpc",
    };
  },
  ssr: true, // Optional: enable SSR
});

export default trpc;
