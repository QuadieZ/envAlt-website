import { Image } from "@chakra-ui/image";
import { Box, Heading, HStack, Text } from "@chakra-ui/layout";


function AppHeader() {
    return (
        <Box ml="12vw" pt="12" pb="12">
            <HStack spacing="7">
                <Image src="/assets/logo.png" objectFit="contain" boxSize="130px"/>
                <Box>
                    <Heading as="h2" size="lg" fontWeight="normal">
                        7-Eleven Electricity Appliance Performance
                    </Heading>
                    <Text fontSize="xl">
                        usage recommendations and greenhouse gas released
                    </Text>
                </Box>
            </HStack>
        </Box>
    )
}

export default AppHeader;