import users from "../cache/morocco.json" with { type: "json" };

const API = "https://gh-users-stars.soubai.workers.dev/user";
const TOKEN = Deno.env.get("TOKEN");
const stargazer = async (user: string) => await (await fetch(`${API}/${user}`, { method: "GET", headers: { "X-Authorization": TOKEN } })).json()
const wait = (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms));


for (let i = 0; i < users.length; i++) {
    const user = users[i];
    console.log("Processing: ", user.login);

    try {
        const stars = await stargazer(user.login);
        users[i] = { ...user, ...stars };
    } catch (error) {
        console.log("Error: ", error);
    } finally {
        await wait(750);
    }

}

try {
    const filename = "./cache/morocco-shiny.json"
    await Deno.create(filename);
    Deno.writeTextFileSync(filename, JSON.stringify({
        users,
        lastUpdate: new Date().toISOString()
    }));

    console.log("Done");

} catch (error) {
    console.log("Error: ", error);
}

