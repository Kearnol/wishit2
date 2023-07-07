import * as React from 'react'
import {
    Link as RouterLink,
    LinkProps as RouterLinkProps,
} from 'react-router-dom'
import Button, { ButtonProps } from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import { Typography } from '@mui/material'

interface Props {
    to: string
}

export default function WishlistControlButton(
    props: Props & ButtonProps<'button', { component?: 'button' }>
) {
    const { to } = props

    const LinkBehavior = React.useMemo(
        () =>
            React.forwardRef<any, Omit<RouterLinkProps, 'to'>>((props, ref) => (
                <RouterLink ref={ref} to="/" {...props} role={undefined} />
            )),
        [to]
    )
    return (
        <Button
            component={LinkBehavior}
            {...props}
            size="medium"
            sx={{
                width: '200px',
            }}
        >
            <Typography color={'white'}>{props.children}</Typography>
        </Button>
    )
}
