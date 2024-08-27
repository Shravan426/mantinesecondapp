import {Tabs, Text,Flex,TextInput,Box,Select,Image, Card,Button  } from '@mantine/core';
import useStyles from './style';
import takeoff from './images/flight_takeoff_FILL0_wght400_GRAD0_opsz48.png'
import landing from './images/flight_land_FILL0_wght400_GRAD0_opsz48.png'
import depdate from './images/calendar_month_FILL0_wght700_GRAD0_opsz48.png'
import {useState} from 'react';
import { DateInput } from '@mantine/dates';
import Component from './images/Component 2 – 20.png'
import arrow from './images/arrow-right.png'
function Search() {
    const { classes } = useStyles();
    const [rows, setRows] = useState([{ id:1 }]);
    const [value, setValue] = useState(null)
 
    const addRow = () => {
      const newId = rows.length > 0 ? Math.max(...rows.map(row => row.id)) + 1 : 1;
      setRows([...rows, { id: newId }]);
    };
    
   
    const removeRow = (id) => {
      setRows(rows.filter((row) => row.id !== id));
    };
    console.log('rows',rows)

    return (
      <Box bg={'#FFFFFF'} w={1200}  pl={30} pr={20} radius={10} xs={12} sm={6} md={4} lg={3} xl={2}>

        <Flex justify='space-between'>

        <Tabs variant="pills" color="dark" defaultValue="oneway" pt={20}>
        <Flex gap='xl' justify='flex-start' align='center' direction='row' wrap='wrap'>
        <Tabs.List>
          <Tabs.Tab value="oneway"  >One way</Tabs.Tab>
          <Tabs.Tab value="roundtrip" >Round Trip</Tabs.Tab>
          <Tabs.Tab value="multi"  >Multicity</Tabs.Tab>
        </Tabs.List>
        </Flex>
        


  
        <Tabs.Panel value="oneway" pt="xs" mt={20}>
        <Flex gap={20} >

          <Card bg='#E2E2E2 ' radius={21} xs={12} sm={6} md={4} lg={3} xl={2}>
          <Image src={takeoff} height={20} width={20} ml={320} mb={-20}/>
          <TextInput placeholder="Enter Departure Airport or City" label="From" size="xl" bg={'#E2E2E2'} h={100} w={350}/>

          </Card>
          <Image className={classes.arrow} src={Component} width={20} height={40} ml={-20} mt={40}></Image>

          <Card bg='#E2E2E2 ' radius={21} xs={12} sm={6} md={4} lg={3} xl={2} ml={-15}>
          <Image src={landing} height={20} width={20} ml={320} mb={-20}/>
          <TextInput placeholder="Enter Destination Airport or City" label="To" size="xl" bg={'#E2E2E2'} h={100} w={350}/>
          </Card>
          <Card bg='#E2E2E2 ' radius={21} xs={12} sm={6} md={4} lg={3} xl={2}>
          <Image src={depdate} height={20} width={20} ml={320} mb={-20}/>
          <DateInput placeholder="Select Date" label="Departure Date" size="xl" bg={'#E2E2E2'} h={100} w={350} maw={400} mx="auto"/>
          </Card>

        </Flex>
        </Tabs.Panel>
  
        <Tabs.Panel value="roundtrip" pt="xs" mt={20}>
        <Flex gap={20} >

          <Card bg='#E2E2E2 ' radius={21} xs={12} sm={6} md={4} lg={3} xl={2}>
          <Image src={takeoff} height={20} width={20} ml={320} mb={-20}/>
          <TextInput placeholder="Enter Departure Airport or City" label="From" size="xl" bg={'#E2E2E2'} h={100} w={350}/>
          
          </Card>
          <Image className={classes.arrow} src={Component} width={20} height={40} ml={-20} mt={40}></Image>

          <Card bg='#E2E2E2' radius={21} xs={12} sm={6} md={4} lg={3} xl={2} ml={-15}>
          <Image src={landing} height={20} width={20} ml={320} mb={-20}/>
          <TextInput placeholder="Enter Destination Airport or City" label="To" size="xl" bg={'#E2E2E2'} h={100} w={350}/>
          </Card>
          <Card bg='#E2E2E2 ' radius={21} xs={12} sm={6} md={4} lg={3} xl={2}>
          <Image src={depdate} height={20} width={20} ml={320} mb={-20}/>
          <DateInput placeholder="Select Date" label="Departure Date" size="xl" bg={'#E2E2E2'} h={100} w={350} maw={400} mx="auto"/>
          </Card>

        </Flex>
        <Flex gap={20} mt={20}>

          <Card bg='#E2E2E2 ' radius={21} xs={12} sm={6} md={4} lg={3} xl={2}>
          <Image src={takeoff} height={20} width={20} ml={320} mb={-20}/>
          <TextInput placeholder="Enter Departure Airport or City" label="From" size="xl" bg={'#E2E2E2'} h={100} w={350}/>
          </Card>
          <Image className={classes.arrow} src={Component} width={20} height={40} ml={-20} mt={40}></Image>
          <Card bg='#E2E2E2 ' radius={21} xs={12} sm={6} md={4} lg={3} xl={2} ml={-15}>
          <Image src={landing} height={20} width={20} ml={320} mb={-20}/>
          <TextInput placeholder="Enter Destination Airport or City" label="To" size="xl" bg={'#E2E2E2'} h={100} w={350}/>
          </Card>
          <Card bg='#E2E2E2 ' radius={21} xs={12} sm={6} md={4} lg={3} xl={2}>
          <Image src={depdate} height={20} width={20} ml={320} mb={-20}/>
          <DateInput placeholder="Select Date" label="Departure Date" size="xl" bg={'#E2E2E2'} h={100} w={350} maw={400} mx="auto"/>
          </Card>

        </Flex>
        </Tabs.Panel>
  
        <Tabs.Panel value="multi" pt="xs" mt={20}>
          {rows.map((row,index) => (
        <Flex key={`${row.id}-${index}`} gap={20}>

          <Card bg='#E2E2E2 ' radius={21} xs={12} sm={6} md={4} lg={3} xl={2}>
          <Image src={takeoff} height={20} width={20} ml={320} mb={-20}/>
          <TextInput placeholder="Enter Departure Airport or City" label="From" size="xl" bg={'#E2E2E2'} h={100} w={350}/>

          </Card>
          <Image className={classes.arrow} src={Component} width={20} height={40} ml={-20} mt={40}></Image>

          <Card bg='#E2E2E2 ' radius={21} xs={12} sm={6} md={4} lg={3} xl={2}  ml={-15}>
          <Image src={landing} height={20} width={20} ml={320} mb={-20}/>
          <TextInput placeholder="Enter Destination Airport or City" label="To" size="xl" bg={'#E2E2E2'} h={100} w={350}/>
          </Card>
          <Card bg='#E2E2E2 ' radius={21} xs={12} sm={6} md={4} lg={3} xl={2}>
          <Image src={depdate} height={20} width={20} ml={320} mb={-20}/>
          <DateInput placeholder="Select Date" label="Departure Date" size="xl" bg={'#E2E2E2'} h={100} w={350} maw={400} mx="auto"/>
          </Card>
          {index === rows.length - 1 ? (
                    <Button color="green" onClick={addRow}>
                      +
                    </Button>
                  ) : (
                    <Button color="red" onClick={() => removeRow(row.id)}>
                      -
                    </Button>
                  )}
                </Flex>
              ))}
        </Tabs.Panel>
      </Tabs>

      <Flex gap={30} ml={-490} mt={20} xs={12} sm={6} md={4} lg={3} xl={2}>
        <Select placeholder="Select Class" data={[]} w={200} c={'##4D4D4D'}></Select>
        <Select placeholder="2 Adults 1 Child 1 Infant" data={[]} w={240} c={"##4D4D4D"}></Select>

</Flex>

        </Flex>
        <Button color="yellow" size="xl" c={'#002D74'} ml={1020}>Find ticket<span ><Image src={arrow} c={'002D74'}/></span></Button>
    



     



      
        
      
    </Box>

     )
}

export default Search;