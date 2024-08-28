import {Tabs, Text,Flex,TextInput,Box,Select,Image, Card,Button,CloseButton,Grid,Title ,Container } from '@mantine/core';
import useStyles from './style';
function Firstpage() {
    const { classes } = useStyles();
    return (
        <Box>
            <Grid justify="space-around">
                <Grid.Col span="content">
                    <Title order={3} mt={10}>Recent Searches</Title>
                </Grid.Col>
                <Grid.Col span={7} display={'flex'} mt={10}>
                    <Text bg={'#F5F5F6'} ml={10} w={300} display={'flex'} h={30} >Lorem <span><Text ml={5}>ipsum</Text></span><span><CloseButton title="Close popover" size="md" iconSize={20} /></span></Text>
                    <Text bg={'#F5F5F6'} ml={10} w={300} display={'flex'} h={30} >Lorem <span><Text ml={5}>ipsum</Text></span><span><CloseButton title="Close popover" size="md" iconSize={20} /></span></Text>
                    <Text bg={'#F5F5F6'} ml={10} w={300} display={'flex'} h={30} >Lorem <span><Text ml={5}>ipsum</Text></span><span><CloseButton title="Close popover" size="md" iconSize={20} /></span></Text>
                    <Text bg={'#F5F5F6'} ml={10} w={200} display={'flex'} h={30} >Lorem <span><Text ml={5}>ipsum</Text></span><span><CloseButton title="Close popover" size="md" iconSize={20} /></span></Text>
                    <Text bg={'#F5F5F6'} ml={10} w={200} display={'flex'} h={30} >Lorem <span><Text ml={5}>ipsum</Text></span><span><CloseButton title="Close popover" size="md" iconSize={20} /></span></Text>
                    <Text bg={'#F5F5F6'} ml={10} w={200} display={'flex'} h={30} >Lorem <span><Text ml={5}>ipsum</Text></span><span><CloseButton title="Close popover" size="md" iconSize={20} /></span></Text>
                    <Text bg={'#F5F5F6'} ml={10} w={200} display={'flex'} h={30} >Lorem <span><Text ml={5}>ipsum</Text></span><span><CloseButton title="Close popover" size="md" iconSize={20} /></span></Text>

                </Grid.Col>
            </Grid>
            <Container display={'flex'} ml={505} mt={40}>
                <Text bg={'#F5F5F6'} w={120} display={'flex'} h={30} pt={5}>Lorem ipsum<span><CloseButton title="Close popover" size="md" iconSize={20} /></span></Text>
                <Text bg={'#F5F5F6'} ml={10} w={120} display={'flex'} h={30} pt={5}>Lorem ipsum<span><CloseButton title="Close popover" size="md" iconSize={20} /></span></Text>
                <Text ml={30} w={120} h={30} c={'#002D74'}>Clear All</Text>
            </Container>
            
        </Box>
    )
}

export default Firstpage;