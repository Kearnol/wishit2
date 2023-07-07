import { useTheme } from '@mui/material/styles'
import Button, { ButtonProps } from '@mui/material/Button'

interface Props {
    to: string
}

export default function WishLinkButton({ to, ...props }: Props & ButtonProps) {
    const theme = useTheme()
    return (
        <Button
            startIcon={props.startIcon ?? undefined}
            {...props}
            size="small"
            variant="outlined"
            color="secondary"
        >
            <a
                href={to}
                target="_blank"
                style={{
                    color: '#6ECB5A',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                {props.children}
            </a>
        </Button>
    )
}
