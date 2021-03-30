import { Box, HStack, Text, VStack } from "@chakra-ui/layout";
import { DatePickerField } from "../components/DatePickerField";
import { CustomerTable, CarbonTable } from "../components/InfoTable";
import NavBar from "../components/NavBar";


const DailyBranch = () => {
    return (
        <Box backgroundColor="#C9F8F2" minHeight="100vh" minWidth="100%" position="absolute">
            <NavBar />
            <VStack mt="18vh" mb="18vh" spacing={24}>
                <VStack>
                    <Text fontSize="2xl">Electrical Appliances Performance of Branch : </Text>
                    <HStack justify="flex-end" width="100%" pr="15%">
                        <Text fontSize="lg">Date: </Text>
                        <DatePickerField />
                    </HStack>
                </VStack>
                <VStack width="70vw" align="flex-start">
                    <Text fontSize="xl">Customer Record</Text>
                    <CustomerTable />
                </VStack>
                <VStack width="70vw" align="flex-start">
                    <Text fontSize="xl">Estimation CO2 Release(หน่วย?)</Text>
                    <CarbonTable />
                </VStack>
                </VStack>
        </Box>
    )
}

export default DailyBranch;