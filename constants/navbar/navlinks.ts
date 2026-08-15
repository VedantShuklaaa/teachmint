export interface NavLink {
	key: string;
	href: string;
	label: string;
}

export const navLinks: NavLink[] = [
	{ key: "products", href: "/products", label: "Products" },
	{ key: "devices", href: "/about", label: "Devices" },
	{ key: "solutions", href: "/contact", label: "Solutions" },
	{ key: "blogs", href: "/blog", label: "Blogs" },
];