import React, { useEffect } from 'react';
import { Button } from "@chakra-ui/button"
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input"

export const PassInput = ({setPass}) => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    let password = React.createRef();

    useEffect(() => {
        setPass(password)
    },[password, setPass])

    return (
        <InputGroup size="md">
            <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                backgroundColor="#EBEAEA"
            />
            <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick} backgroundColor="#DED9D9">
                    {show ? "Hide" : "Show"}
                </Button>
            </InputRightElement>
        </InputGroup>
    )
}