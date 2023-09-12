
import { Outlet } from 'react-router-dom';
import { Box, Show } from '@chakra-ui/react';
import Header from '../Components/Header';
import Aside from '../Components/Sidebar/Aside';

const Layout = () => {
    return (
        <>
            <Header />
            <Box pt={8} display="flex" flexDirection="row">
                <Show above='md'>
                    <Aside />
                </Show>
                <Box pt="20" width="100%">
                    <Outlet />
                </Box>
            </Box>
        </>
    );
};

export default Layout;