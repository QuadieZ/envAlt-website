import { Input } from "@chakra-ui/input";
import { Box, Flex, Grid, GridItem, Text, VStack } from "@chakra-ui/layout";
import { useEffect } from "react";
import { Button, InputGroup, InputRightElement } from "@chakra-ui/react"
import { PassInput } from "../components/PassInput";
import LoginService from '../services/LoginService';
import * as React from 'react'
import { useHistory } from 'react-router-dom'

const loginService = new LoginService();


export default function LoginPage() {
    const history = useHistory();
    async function login(u,p) {
        const login = await loginService.checkLogin(u,p);
        if (login) {
            console.log('hi')
            history.push("/main")
        }
    }


    let username = React.createRef();
    let password = React.createRef();

    function handleClick() {
        let u = username.current.value
        let p = password.current.value
        login(u,p);
    }
    const [show, setShow] = React.useState(false)
    const showPass = () => setShow(!show)

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
                    <GridItem colSpan={5}><Input backgroundColor="#EBEAEA" placeholder="Enter username" ref={username}></Input></GridItem>
                    <GridItem colSpan={2}><Text fontSize="lg">Password:</Text></GridItem>
                    <GridItem colSpan={5}>
                        <InputGroup size="md">
                            <Input
                                pr="4.5rem"
                                type={show ? "text" : "password"}
                                placeholder="Enter password"
                                backgroundColor="#EBEAEA"
                                ref={password}
                            />
                            <InputRightElement width="4.5rem">
                                <Button h="1.75rem" size="sm" onClick={showPass} backgroundColor="#DED9D9">
                                    {show ? "Hide" : "Show"}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </GridItem>
                </Grid>
                <Flex width="60vw" justify="flex-end">
                    <Button
                        bg="#8BD9EB"
                        _hover={{ bg: "#83D1E2" }}
                        minWidth="150"
                        fontWeight="normal"
                        fontSize="xl"
                        py="5"
                        borderRadius="50"
                        boxShadow="0px 5px 0px rgba(0, 0, 0, 0.2);"
                        position="relative"
                        onClick={() => { handleClick() }}
                    >
                        Enter</Button>
                </Flex>
            </VStack>

        </Box>
    )
}
