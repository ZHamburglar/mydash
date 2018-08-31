export default [
	{ name: 'inbox', path: '/inbox' },
    { name: 'inbox.message', path: '/message/:id' },
    { name: 'compose', path: '/compose' },
	{ name: 'contacts', path: '/contacts' },
	{
		name: "home",
		path: "/",
		title: "Home",
		icon: "home",
		description: "",
		hidden: true
	},
	{
		name: "calendar",
		path: "/Calendar",
		title: "Calendar",
		icon: "file",
		description: "",
		hidden: true
	},
	{
		name: "settings",
		path: "/Settings",
		title: "Settings",
		icon: "setting",
		description: "",
		hidden: true
	},
	{
		name: "ynab",
		path: "/YNAB",
		title: "YNAB",
		icon: "chart-line",
		description: "",
		hidden: true
	}
]