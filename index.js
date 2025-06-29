import dotenv from "dotenv";
dotenv.config();
import cron from "node-cron";
import unitrack from "./unitrack.js";
import http from "http";
import aquago from "./aquago.js";

const server = http.createServer();

let i = 0;

process.env.MODE === "dev" && cron.schedule("*/1 * * * *", () => {
    console.log("CRON TESTED ", i++);
});

cron.schedule(unitrack.remindSchedule, async () => {
    try {
        console.log("CRON JOB REMIND TASKS");
        await unitrack.remind()
        console.log("CRON JOB REMIND TASKS DONE");
    } catch (error) {
        console.error("ERROR WHILE CRON JOB REMIND TASKS", error);
    }
});

cron.schedule(aquago.remindSchedule, async () => {
    try {
        console.log("CRON JOB AQUAGO");
        await aquago.remind()
        console.log("CRON JOB AQUAGO DONE");
    } catch (error) {
        console.error("ERROR WHILE CRON JOB AQUAGO", error);
    }
});

server.listen(process.env.PORT, () => console.log(`CRON Server running on port ${process.env.PORT}`));

