const cron = require("node-cron");
const axios = require("axios");
const { getLeader } = require("./scraper.js");

cron.schedule("*/3 * * * *", async function () {
  console.log("running a task every 3 minutes");

  let leader = await getLeader();
  console.log("Cron job: Leader:", leader);
  axios
    .get("/link", {
      params: {
        link: leader, //<<<< ========================== here I want to pass the link from leader.js file
      },
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
});
