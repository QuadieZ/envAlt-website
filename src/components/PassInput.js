import React from 'react';
import { Button } from "@chakra-ui/button"
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input"

export const PassInput = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

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