import { Button,Grid,Box,Text,Image,Flex, BackgroundImage,Title,Container } from '@mantine/core';
import useStyles from './style';
import Group206 from './images/Group 206.png'
import Path38 from "./images/Path 38.png";
import Search from './Search';

function Homepage() {
    const { classes } = useStyles();
        return (
          <><Box >
            <BackgroundImage className={classes.Group} src={Group206} maw={'100%'}>
              <Container pt={100}>
                <Title order={1} ta="center" c={"#002D74"}>Explore the World: Book Your Next Flight with Us</Title>
                <Image src={Path38} align="center" w={'100%'} mt={30} />
                <Text c={"white"} ta="center">We bring you not only a stay option, but an experience in your budget to enjoy the luxury.</Text>
                <Button color="yellow" size="lg" c={"#0B0A12"} ml={350} mt={30}>Discover Now</Button>
              </Container>
              <Container mt={100} ml={100}>
              <Search/>
              </Container>
            </BackgroundImage>
          </Box>
          
          
            </>
        ) 
}
export default Homepage;