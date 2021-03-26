import { Box, HStack, Text, VStack } from "@chakra-ui/layout";
import { DatePickerField } from "../components/DatePickerField";
import NavBar from "../components/NavBar";


const dailyBranch = () => {
    return (
        <Box backgroundColor="#C9F8F2" minHeight="100vh" minWidth="100%" position="absolute">
            <NavBar />
            <VStack mt="18vh" mb="18vh" spacing={32}>
                <VStack>
                <Text fontSize="2xl">Electrical Appliances Performance of Branch : </Text>
                <HStack justify="flex-end" width="100%" pr="15%">
                    <Text fontSize="lg">Date: </Text>
                   <DatePickerField/>
                </HStack>
                </VStack>
            </VStack>
        </Box>
    )
}

export default dailyBranch;