import {Tabs, Text,Flex,TextInput,Box,Select,Image, Card,Button,CloseButton,Grid,Title ,Container, MultiSelect } from '@mantine/core';
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

                    <MultiSelect 
                     classNames={{
                        wrapper: classes.wrapper,
                         
                      }}
                        data={['Lorem ipsum1', 'Lorem ipsum2', 'Lorem ipsum3', 'Lorem ipsum4', 'Lorem ipsum5', 'Lorem ipsum6', 'Lorem ipsum7','Lorem ipsum8','Lorem ipsum9']}
                        defaultValue={['Lorem ipsum1']}
                        clearButtonProps={{ 'aria-label': 'Clear selection' }}
                        clearable
                        variant='unstyled'
                        
                    />

                </Grid.Col>
            </Grid>
 
            
        </Box>
    )
}

export default Firstpage;