import {Tabs, Text,Flex,TextInput,Box,Select,Image, Card,Button,CloseButton,Grid,Title ,Container, ScrollArea,Group,Badge } from '@mantine/core';
import useStyles from './style';
import Group93 from './images/Group 93.jpg'
import Group92 from './images/Group 92.jpg'
import Group91 from './images/Group 91.jpg'
import Group94 from './images/Group 94.jpg'
import Star from './images/star.png'

function FirstSlide() {
    const { classes } = useStyles();
    function CardImage({imagesrc,imagesmall,top,title,rating,description}) {
        return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                    <Image src={imagesrc} height={500} alt="Dubai"/>
                    <Text
                    bg={"#BBBBBD"}
                    opacity={'1'}
                    className={classes.radius}
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      padding: "5px",
                      borderRadius: "50%",
                    }}
                    fz={12}
                    fw={800}
                  >
                    {top}
                  </Text>
                </Card.Section>
                <Group position="apart" mt="md" mb="xs">
                    <Title order={2}>{title}</Title>
                    <Title order={3} ml={155}>{rating}</Title>
                    <Image src={imagesmall} height={15} width={15}></Image>
                </Group>
                <Text size="sm" color="dimmed">{description}</Text>
            </Card>
        )
    }
    return (
        <>
        <Title order={2} ta="center">Popular Destinations</Title>
        <ScrollArea w={1500} type="never">
        <Box w={5000}>
          
          <Flex gap="xl" justify="flex-start" align="center" direction="row" wrap="wrap" mt={40} ml={50}>
            
            <CardImage imagesrc={Group93}
            top="10% OFF"
            title="Dubai"
            rating="4.5"
            imagesmall={Star}
            description="Lorem ipsum dolor sit amet"
            />

            <CardImage imagesrc={Group92}
            top="20% OFF"
            title="Abu Dhabi"
            rating="4.5"
            imagesmall={Star}
            description="Lorem ipsum dolor sit amet"
            />

            <CardImage imagesrc={Group91}
            top="10% OFF"
            title="Sharjah"
            rating="4.5"
            imagesmall={Star}
            description="Lorem ipsum dolor sit amet"
            />

            <CardImage imagesrc={Group94}
            top="5% OFF"
            title="Riyad"
            rating="4.5"
            imagesmall={Star}
            description="Lorem ipsum dolor sit amet"
            />

            <CardImage imagesrc={Group93}
            top="10% OFF"
            title="Dubai"
            rating="4.5"
            imagesmall={Star}
            description="Lorem ipsum dolor sit amet"
            />

            <CardImage imagesrc={Group92}
            top="20% OFF"
            title="Abu Dhabi"
            rating="4.5"
            imagesmall={Star}
            description="Lorem ipsum dolor sit amet"
            />

            <CardImage imagesrc={Group91}
            top="10% OFF"
            title="Sharjah"
            rating="4.5"
            imagesmall={Star}
            description="Lorem ipsum dolor sit amet"
            />

            <CardImage imagesrc={Group94}
            top="5% OFF"
            title="Riyad"
            rating="4.5"
            imagesmall={Star}
            description="Lorem ipsum dolor sit amet"
            />

            <CardImage imagesrc={Group93}
            top="10% OFF"
            title="Dubai"
            rating="4.5"
            imagesmall={Star}
            description="Lorem ipsum dolor sit amet"
            />

            <CardImage imagesrc={Group92}
            top="20% OFF"
            title="Abu Dhabi"
            rating="4.5"
            imagesmall={Star}
            description="Lorem ipsum dolor sit amet"
            />

            <CardImage imagesrc={Group91}
            top="10% OFF"
            title="Sharjah"
            rating="4.5"
            imagesmall={Star}
            description="Lorem ipsum dolor sit amet"
            />

            <CardImage imagesrc={Group94}
            top="5% OFF"
            title="Riyad"
            rating="4.5"
            imagesmall={Star}
            description="Lorem ipsum dolor sit amet"
            />

                

            
            </Flex>
        </Box>
        </ScrollArea>
        </>
    )
}

export default FirstSlide;