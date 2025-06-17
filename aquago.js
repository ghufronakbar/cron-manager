
const aquago = {
    remind: async () => {
        try {
            const response = await fetch('https://aquago.vercel.app/api/test');
            await response.json();
            console.log("CRON JOB AQUAGO");
        } catch (error) {
            console.error("ERROR WHILE CRON JOB AQUAGO", error);
        }
    },
    remindSchedule: "0 0,12 * * *"
}

export default aquago