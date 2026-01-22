
async function browserOnMessage(action)
	{
	if (action.action === "gemini-download")
		{
		//await download(action.content, "text/markdown", slugify(action.title) + ".md");
		//console.log(document.querySelector("#chat-history"));
		const chat = document.querySelectorAll(".chat-history").item(0);
		console.log(chat);
		// OK j'ai le chat ;-)
		}
	}

browser.runtime.onMessage.addListener(browserOnMessage);
