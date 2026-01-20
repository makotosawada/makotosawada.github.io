export const profile = {
	fullName: 'Makoto Sawada',
	title: 'Assistant Professor',
	institute: 'Rikkyo University',
	author_name: 'Makoto Sawada', // Author name to be highlighted in the papers section
	research_areas: [
		// { title: 'Physics', description: 'Brief description of the research interest', field: 'physics' },
	],
}

// Set equal to an empty string to hide the icon that you don't want to display
export const social = {
	email: 'makoto.sawada@rikkyo.ac.jp',
	linkedin: '',
	x: '',
	bluesky: '',
	github: '',
	gitlab: '',
	scholar: '',
	inspire: '',
	arxiv: '',
	orcid: 'https://orcid.org/0000-0003-2008-6887',
	researchmap: 'https://researchmap.jp/makoto.sawada',
}

export const template = {
	website_url: 'https://localhost:4321', // Astro needs to know your site’s deployed URL to generate a sitemap. It must start with http:// or https://
	menu_left: false,
	transitions: true,
	lightTheme: 'emerald', // Select one of the Daisy UI Themes or create your own
	darkTheme: 'night', // Select one of the Daisy UI Themes or create your own
	excerptLength: 200,
	postPerPage: 5,
    base: '' // Repository name starting with /
}

export const seo = {
	default_title: "Makoto Sawada's web page",
	default_description: 'A personal web page of Makoto Sawada, PhD.',
	default_image: '/images/astro-academia.png',
}
