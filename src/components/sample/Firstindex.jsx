import {Tabs, Text,Flex,TextInput,Box,Select,Image, Card,Button,CloseButton,Grid,Title ,Container,Group,ScrollArea,SimpleGrid } from '@mantine/core';
import useStyles from './style';
import Group64 from './images/Group 64.png'
import Group63 from './images/Group 63.png'
import ScreenShot from './images/Screenshot 2024-07-12 142729.png'
import Layer2 from './images/Layer 2.jpg'
import Group89 from './images/Group 89.jpg'
import Group69 from './images/Group 69.jpg'
import Group70 from './images/Group 70.jpg'
import Group71 from './images/Group 71.jpg'
import Group72 from './images/Group 72.jpg'
function Firstindex() {
    const { classes } = useStyles();
    return (
        <>
        <ScrollArea w={1500} type="never">
        <Box w={1600} mt={50}>
           <Title order={2} align="center">Flight Deals</Title>
           
           <Flex gap="md" justify="center" align="center" direction="row" wrap="wrap" mt={50} xs={12} sm={6} md={4} lg={3} xl={2} maw={'100%'}>
            <Card withBorder radius="xs" p={0} w={300} className={classes.card} display={'flex'}>
                <Group wrap="nowrap" gap={0}>
                <Image src={Group64} height={140}/>
                </Group>
                <div className={classes.body}>
                    <Text fw={700} size="xs" ml={10} pt={10}>Book & Enjoy</Text>
                    <Text mt="xs" mb="md" ml={10} pt={10}>20% Off on the best available fare</Text>
                </div>
           </Card>
           <Card withBorder radius="xs" p={0} w={300} h={140} className={classes.card1} bg={'#D0D8E5'} pl={30}>
                <div className={classes.body1}>
                    <Text fw={700} fz={'20px'} size="xs" c={'#002D74'}>Get extra 20% discount on all deals</Text>
                    <Container display={'flex'}>
                    <Button bg={'white'} c="dark" mt={10} ml={-15}>LOG125F</Button>
                    <Text ml={40} mt={35}>Valid till : 31 Dec</Text>
                    </Container>
                </div>
           </Card>
           <Card withBorder radius="xs" p={0} w={300} className={classes.card} display={'flex'}>
                <Group wrap="nowrap" gap={0}>
                <Image src={Group63} height={155}/>
                </Group>
                <div className={classes.body2}>
                    <Text fw={700} size="xs" ml={10} pt={10}>Flat</Text>
                    <Text mt="xs" mb="md" ml={10}><span><Text fz={'31px'}>20% Off</Text></span>on Domestic flights</Text>
                </div>
           </Card>
           <Card withBorder radius="xs" p={0} w={300} className={classes.card} display={'flex'}>
                <Group wrap="nowrap" gap={0}>
                <Image src={Group64} height={140}/>
                </Group>
                <div className={classes.body}>
                    <Text fw={700} size="xs" ml={10} pt={10}>Book & Enjoy</Text>
                    <Text mt="xs" mb="md" ml={10} pt={10}>20% Off on the best available fare</Text>
                </div>
           </Card>
           <Card withBorder radius="xs" p={0} w={300} className={classes.card} display={'flex'}>
                <Group wrap="nowrap" gap={0}>
                <Image src={Group64} height={140}/>
                </Group>
                <div className={classes.body}>
                    <Text fw={700} size="xs" ml={10} pt={10}>Book & Enjoy</Text>
                    <Text mt="xs" mb="md" ml={10} pt={10}>20% Off on the best available fare</Text>
                </div>
           </Card>
           </Flex>
           
           
        </Box>
        </ScrollArea>
        <Box mt={50}>
            <Grid justify='center' xs={12} sm={6} md={4} lg={3} xl={2} maw={'100%'}>
                <Grid.Col span={4}>
                    <Title order={2}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</Title>
                    <Text>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor dolore magna aliqua</Text>
                    <Image src={ScreenShot}/>
                </Grid.Col>
                <Grid.Col span={2}>
                    <Image src={Layer2} ml={20}/>
                    <Text c={'#002D74'} fz={47} bg={'white'} ml={90}>10 M+<span><Text c={'#4D4D4D'} fz={20}>Total Booking</Text></span></Text>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Image src={Group89} width={500}/>
                    <SimpleGrid cols={2} spacing="xl" verticalSpacing="xl" mt={20}>
                        <div className={classes.fours}>
                            <Image src={Group69} width={70}/>
                            <div>
                                <Title order={4} ml={10}>Best Rate Guarantee</Title>
                                <Text ml={10}>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor dolore magna aliqua</Text>
                            </div>
                        </div>
                        <div className={classes.fours}>
                            <Image src={Group70} width={70}/>
                            <div>
                                <Title order={4} ml={10}>No Booking Fee</Title>
                                <Text ml={10}>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor dolore magna aliqua</Text>
                            </div>
                        </div>
                        <div className={classes.fours}>
                            <Image src={Group71} width={70}/>
                            <div>
                                <Title order={4} ml={10}>Security Payment</Title>
                                <Text ml={10}>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor dolore magna aliqua</Text>
                            </div>
                        </div>
                        <div className={classes.fours}>
                            <Image src={Group72} width={70}/>
                            <div>
                                <Title order={4} ml={10}>Money Back Guarantee</Title>
                                <Text ml={10}>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor dolore magna aliqua</Text>
                            </div>
                        </div>
                    </SimpleGrid>
                    
                    
                </Grid.Col>
             </Grid>

        </Box>
        </>
    )
}
export default Firstindex;