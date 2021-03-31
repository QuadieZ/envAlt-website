import { Input } from "@chakra-ui/input";
import { Box, Flex, Grid, GridItem, Text, VStack } from "@chakra-ui/layout";
import { useEffect } from "react";
import { PassInput } from "../components/PassInput";
import { LoginButton } from "../components/SaveEnButtons";
import LoginService from '../services/loginService';

const loginService = new LoginService();

export default function LoginPage()  {
    useEffect(() => {
        async function fetchData() {
          const login = await loginService.checkLogin();
          console.log(login)
      }
      fetchData();
    });

    return (
        <Box minWidth="100vw" minHeight="100vh" backgroundColor="#D4F7FF">
            <VStack align="center" justify="center" minHeight="100vh">
                <Flex minWidth="60vw" justify="space-between">
                    <Text color="#45A5EB">Login</Text>
                    <Flex>
                        <Text color="#45A5EB">No account? </Text>
                        <Text ml="0.5vw" textDecoration="underline" color="#45A5EB" cursor="pointer">Register here</Text>
                    </Flex>
                </Flex>
                <Grid
                    minWidth="60vw"
                    direction="column"
                    minHeight="30vh"
                    backgroundColor="#F8F8F8"
                    mt="1vh"
                    alignItems="center"
                    templateColumns="repeat(7, 1fr)"
                    templateRows="repeat(2,1fr)"
                    px="8vw"
                    py="4vh">
                    <GridItem colSpan={2}><Text fontSize="lg">Username:</Text></GridItem>
                    <GridItem colSpan={5}><Input backgroundColor="#EBEAEA" placeholder="Enter username"></Input></GridItem>
                    <GridItem colSpan={2}><Text fontSize="lg">Password:</Text></GridItem>
                    <GridItem colSpan={5}><PassInput /></GridItem>
                </Grid>
                <Flex width="60vw" justify="flex-end">
                    <LoginButton />
                </Flex>
            </VStack>

        </Box>
    )
}
