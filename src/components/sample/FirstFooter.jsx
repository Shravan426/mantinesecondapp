import {Tabs, Text,Flex,TextInput,Box,Select,Image, Card,Button,CloseButton,Grid,Title ,Group, Divider,Breadcrumbs,Container,SimpleGrid} from '@mantine/core';
import useStyles from './style';
import paypal from './images/paypal.png'
import visa from './images/visa.png'
import mastercard from './images/mastercard.png'
import expresscard from './images/expresscard.png'
import loraem from './images/Component 116 – 1.png'
import Path146 from './images/Path 146.png'
import Path147 from './images/Path 147.png'
import Path142 from './images/Path 142.png'
import Path143 from './images/Path 143.png'
import Path144 from './images/Path 144.png'
import Path145 from './images/Path 145.png'

function FirstFooter() {
    const { classes } = useStyles();
    return (
        <Box bg={'#0B0A12'} pb={50} >
            <Grid justify="space-around" xl={12} sm={6} md={4} lg={3}>
                <Grid.Col span={3} mt={90}>
                    <Title order={6} c={'white'} mb={10}>Payment & Security</Title>
                    <SimpleGrid cols={5} spacing="xs">
                        <div>
                            <Image src={paypal} width={65}/>
                        </div>
                        <div>
                            <Image src={visa} width={40}/>
                        </div>
                        <div>
                            <Image src={mastercard} width={40} ml={-20}/>
                        </div>
                        <div>
                            <Image src={expresscard} width={40} ml={-50}/>
                        </div>
                    </SimpleGrid>
                </Grid.Col>
                <Grid.Col span={3}>
                    <Image className={classes.lor} src={loraem} width={220} />
                    <Text className={classes.lory} c={'white'} ta='center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</Text>
                        <Container display={'flex'}>
                            <Image src={Path146} width={10} ml={-80} mt={9}></Image>
                            <Text c={'white'} ml={6}>+1234 568 963</Text>
                            <Divider orientation="vertical" ml={10}/>
                        
                        
                                <Image src={Path147} width={19} mt={7} ml={10}/>
                                <Text c={'white'} ml={10}>example@gmail.com</Text>
                           
                        
                        </Container>
                    
                    
                </Grid.Col>
                <Grid.Col span={1} mt={100}>
                    <Title order={6} c={'#FFFFFF'} ml={22} >Follow us on</Title>
                    <SimpleGrid cols={4} spacing="md" mt={10}>
                        <div>
                            <Image src={Path142} width={10}/>
                        </div>
                        <div>
                            <Image src={Path143} width={20}/> 
                        </div>
                        <div>
                            <Image src={Path144} width={20}/> 
                        </div>
                        <div>
                            <Image src={Path145} width={20}/> 
                        </div>
                    </SimpleGrid>
                </Grid.Col>
            </Grid>
            <Divider size="xs" mt={20} />
            <Grid justify="space-around" c={'white'} mt={30}>
                <Grid.Col span={3}>Copyrights ©2023 Pyramids Travel & Tourism</Grid.Col>
                <Grid.Col span={4} display={'flex'}>
                    <Text>Privacy policy</Text>
                    <Divider orientation="vertical" ml={10}/>
                    <Text ml={10}>Terms and conditions</Text>
                    <Divider orientation="vertical" ml={10} />
                    <Text ml={10}>Refund policy</Text>
                    <Divider orientation="vertical" ml={10} />
                </Grid.Col>
            </Grid>

        </Box>
    )
}

export default FirstFooter;