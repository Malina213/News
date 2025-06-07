export const Button = ({
	className = '',
	disabled = false,
	onClick,
	children,
	...rest
}) => {
	return (
		<button
			className={className}
			disabled={disabled}
			onClick={onClick}
			{...rest}
		>
			{children}
		</button>
	)
}
