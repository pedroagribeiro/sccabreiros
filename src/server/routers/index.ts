import * as trpc from '@trpc/server';
import { rosterRouter } from './roster';
import { fixtureRouter } from './fixture';
import { contactRouter } from './contact';
import { membershipRouter } from './membership';
import { classificationRouter } from './classification';
import { teamsRouter } from './team';

export const appRouter = trpc
  .router()
  .merge('roster.', rosterRouter)
  .merge('fixture.', fixtureRouter)
  .merge('contact.', contactRouter)
  .merge('membership.', membershipRouter)
  .merge('classification.', classificationRouter)
  .merge('teams.', teamsRouter);

export type AppRouter = typeof appRouter;
