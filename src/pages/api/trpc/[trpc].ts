import { appRouter, AppRouter } from '../../../server/routers';
import { inferProcedureOutput } from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { withCors } from '../../../server/utils/cors';

// export API handler
export default withCors(
  trpcNext.createNextApiHandler({
    router: appRouter,
    createContext: () => null,
  }),
);

export type inferQueryResponse<
  TRouteKey extends keyof AppRouter['_def']['queries'],
> = inferProcedureOutput<AppRouter['_def']['queries'][TRouteKey]>;
