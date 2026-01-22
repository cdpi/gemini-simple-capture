
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
	slugify
	};
