const { config } = require("dotenv");
config();
const { Configuration, OpenAIApi } = require("openai");
const readline = require("readline");

console.log("Welcome to ChatGPT 3.5 turbo! You may exit with 'E'");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	prompt: "You: ",
});

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateQuery = async (query) => {
	const completion = await openai.createChatCompletion({
		model: "gpt-3.5-turbo",
		messages: [{ role: "user", content: query }],
	});
	process.stdout.clearLine();
	readline.cursorTo(process.stdout, 0);
	console.log(completion.data.choices[0].message.content.trim());
};

rl.prompt();

rl.on("line", async (query) => {
	try {
		if (query.split("")[0].toLowerCase() === "e" && query.length === 1)
			return process.exit();
		process.stdout.write("Loading...");
		await generateQuery(query);
		rl.prompt();
	} catch (error) {
		console.log(error.data.error);
		rl.prompt();
	}
});
