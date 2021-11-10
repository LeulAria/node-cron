export default {
  hello: {
    frequency: "* * * * *", // eEvery 1 min
    handler: "cron-handlers/hello.js",
  },
};
