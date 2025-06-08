
const unitrack = {
    remind: async () => {
        try {
            const response = await fetch('https://api-unitrack.vercel.app/api/cron/remind');
            await response.json();
            console.log("CRON JOB REMIND TASKS");
        } catch (error) {
            console.error("ERROR WHILE CRON JOB REMIND TASKS", error);
        }
    },
    remindSchedule: "0 * * * *"
}

export default unitrack