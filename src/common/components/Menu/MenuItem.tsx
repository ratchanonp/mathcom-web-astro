interface Props {
	title: string;
	href: string;
	Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const MenuItem = (props: Props) => {
	const { title, href, Icon } = props;

	return (
		<li className="w-full">
			<a href={href} className="group flex space-x-2 py-2 hover:bg-white/10">
				<Icon className="h-6 w-6 transition-transform ease-in-out group-hover:translate-x-5" />
				<p className="w-fit transition-transform ease-in-out group-hover:translate-x-5">{title}</p>
			</a>
		</li>
	);
};

export default MenuItem;
