import type { ReactNode, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	disabled?: boolean
	onClick?: () => void
	children?: ReactNode
}

export const Button: React.FC<ButtonProps> = ({
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
