import cron from "node-cron";
import { resolve } from "path";

export default {
  initCron: (config) => {
    Object.keys(config).forEach((key) => {
      if (cron.validate(config[key].frequency)) {
        cron.schedule(config[key].frequency, async () => {
          const handler = await import(resolve(resolve(config[key].handler)));
          handler.default();
        });
      }
    });
  },
};
