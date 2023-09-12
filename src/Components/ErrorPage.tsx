import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import Header from './Header'
import { Box } from '@chakra-ui/react'

export default function ErrorPage() {

    const error = useRouteError()

    return (
        <div>
            <Header/>
            <Box pt="10rem" textAlign="center">
                {isRouteErrorResponse(error) ? 'This page does not exist.'
                    : 'An unexpected error occurred.'}
            </Box>
        </div>
    )
}
