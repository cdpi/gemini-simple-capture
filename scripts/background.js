
import { download, slugify } from "./utils.js";

function runtimeOnInstalled()
	{
	}

function actionOnClicked(tab)
	{
	//console.log(tab.title + " - " + slugify(tab.title));

	browser.tabs.sendMessage(tab.id, {action: "gemini-download"});

	//download("# Gemini sdjskjhfsdkf", "text/markdown", "example.md");
	}

browser.runtime.onInstalled.addListener(runtimeOnInstalled);

browser.action.onClicked.addListener(actionOnClicked);
