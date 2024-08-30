import {Tabs, Text,Flex,TextInput,Box,Select,Image, Card,Button,CloseButton,Grid,Title ,Group, MultiSelect,Accordion,Container,SimpleGrid} from '@mantine/core';
import useStyles from './style';
import Path57 from './images/Path 57.png'
import Path58 from './images/Path 58.png'
import Appstore from './images/app-store.png'
import playstore from './images/google-play.png'

function FirstThreepage() {
    const { classes } = useStyles();
    return (
       <Box bg={'#F5F5F6'} pt={100} pb={100}>
        <Grid justify="space-around">
            
            <Grid.Col span={3} bg={'#FFFFFF'} display={'flex'} ml={150}>
                <div>
                    <Image src={Path57} width={80}/>
                </div>
                <div>
                    <Title order={4} c={'dark'} ml={10}>24x7 Help</Title>
                    <Text c={'dark'} ml={10}>Lorem ipsum dolor sit amet, con sectetur adipiscing elit, sed do</Text>
                </div>
            </Grid.Col>

            <Grid.Col span={3} bg={'#FFFFFF'} display={'flex'}>
                <div>
                    <Image src={Path58} width={80}/>
                </div>
                <div>
                    <Title order={4} c={'dark'} ml={10}>Payment Trust</Title>
                    <Text c={'dark'} ml={10}>Lorem ipsum dolor sit amet, con sectetur adipiscing elit, sed do</Text>
                </div>
            </Grid.Col>
            <Grid.Col span={3}>
                <Title order={5}>Download App</Title>
                <SimpleGrid cols={3} spacing='xs'>
                    <div>
                       <Image src={Appstore} width={120} mt={10}/> 
                    </div>
                    <div>
                       <Image src={playstore} width={120} mt={10}/>
                    </div>
                </SimpleGrid>
            </Grid.Col>
        </Grid>
       </Box> 
    )
}

export default FirstThreepage;