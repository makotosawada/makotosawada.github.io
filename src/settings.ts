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
	ads: 'https://ui.adsabs.harvard.edu/search/filter_author_facet_hier_fq_author=OR&filter_author_facet_hier_fq_author=author_facet_hier%3A%221%2FSawada%2C%20M%2FSawada%2C%20M%22&filter_author_facet_hier_fq_author=author_facet_hier%3A%221%2FSawada%2C%20M%2FSawada%2C%20Makoto%22&filter_database_fq_database=AND&filter_database_fq_database=database%3A%22astronomy%22&fq=%7B!type%3Daqp%20v%3D%24fq_author%7D&fq=%7B!type%3Daqp%20v%3D%24fq_database%7D&fq_author=(author_facet_hier%3A%221%2FSawada%2C%20M%2FSawada%2C%20M%22%20OR%20author_facet_hier%3A%221%2FSawada%2C%20M%2FSawada%2C%20Makoto%22)&fq_database=(database%3A%22astronomy%22)&q=%20author%3A%22Sawada%2C%20Makoto%22&sort=date%20desc%2C%20bibcode%20desc&p_=0',
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
