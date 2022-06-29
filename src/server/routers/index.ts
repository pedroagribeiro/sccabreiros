import * as trpc from '@trpc/server';
import { rosterRouter } from './roster';
import { fixtureRouter } from './fixture';
import { contactRouter } from './contact';
import { membershipRouter } from './membership';

// export const appRouter = trpc.router().query('hello', {
//   input: z
//     .object({
//       text: z.string().nullish(),
//     })
//     .nullish(),
//   resolve({ input }) {
//     return {
//       greeting: `hello ${input?.text ?? 'world'}`,
//     };
//   },
// });

export const appRouter = trpc
  .router()
  .merge('roster.', rosterRouter)
  .merge('fixture.', fixtureRouter)
  .merge('contact.', contactRouter)
  .merge('membership.', membershipRouter);

export type AppRouter = typeof appRouter;
