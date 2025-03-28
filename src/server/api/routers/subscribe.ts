import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const subscribeRouter = createTRPCRouter({
  sub: publicProcedure
    .input(z.object({ text: z.string().min(5, { message: "must be 5 more" }) }))
    .query(({ input }) => {
      return {
        pleaseSub: `Please do subscribe to: ${input?.text} `,
      };
    }),
});
