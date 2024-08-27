import { Button,Grid,Box,Text,Image,Flex } from '@mantine/core';
import useStyles from './style';
import Component115 from "./images/Component 115 – 1.png"
function Header() {
    const { classes } = useStyles();
    return (
        <Box className={classes.head} maw={'100%'} mx="auto">
            <Grid justify="space-around">
                <Grid.Col span={3} xs={12} sm={6} md={4} lg={3}>
                    <Image src={Component115} w={'100%'}/>
                </Grid.Col>
                <Grid.Col span={4} display={'flex'} xs={12} sm={6} md={4} lg={3} align="center">
                <Flex gap="sm" justify="flex-start" align="center" direction="row" wrap="wrap">
                    <Text c="blue">Home</Text>
                    <Text c="blue">About Us</Text>
                    <Text c="blue">Services</Text>
                    <Text c="blue">Packages</Text>
                    <Text c="blue">Contact Us</Text>
                </Flex>
                </Grid.Col>
                <Grid.Col span={3} display={'flex'} xs={12} sm={6} md={4} lg={3}>
                <Flex gap="sm" justify="flex-start" align="center" direction="row" wrap="wrap">
                    <Button color="indigo">Agent Portal</Button>
                    <Button color="yellow">Login</Button>
                </Flex>
                </Grid.Col>
                </Grid>
        </Box>
    );
}

export default Header;