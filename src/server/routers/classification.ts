import * as trpc from '@trpc/server';
import axios from 'axios';
import { z } from 'zod';

const scraping_service_url =
  'https://sccabreiros-scraping-service.herokuapp.com';

export const classificationRouter = trpc
  .router()
  .query('available-seasons', {
    async resolve() {
      var availableSeasons: Array<string>;
      return axios
        .get(scraping_service_url + '/available_seasons')
        .then((res) => {
          availableSeasons = [...res.data.sort()];
          return availableSeasons;
        })
        .catch((_) => []);
    },
  })
  .query('season-classification', {
    input: z.object({
      season: z.string(),
    }),
    async resolve({ input }) {
      var classification: Array<any>;
      return axios
        .get(scraping_service_url + '/' + input.season)
        .then((res) => {
          classification = [...res.data];
          return classification;
        })
        .catch((_) => []);
    },
  });
