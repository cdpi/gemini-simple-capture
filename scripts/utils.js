
async function download(content, mimetype, filename)
	{
	const blob = new Blob([content], {type: mimetype});
	const url = URL.createObjectURL(blob);

	await browser.downloads.download({
		url: url,
		filename: filename,
		//saveAs: false,
		conflictAction: "uniquify"
		});

	URL.revokeObjectURL(url);

	//return Promise.resolve({success: true});
	}

function slugify(text)
	{
	return text.trim().toLowerCase()
		.replace(/[/\\?%*:|"<>]/g, "-")
		.replace(/\s+/g, "-")
		.replace(/-+/g, "-")
		.replace(/^-+|-+$/g, "");
	}

export
	{
	download,
	slugify
	};
