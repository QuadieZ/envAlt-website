import { Box, HStack, Text, VStack } from "@chakra-ui/layout";
import { ApplianceCard } from "../components/ApplianceCard.js";
import NavBar from "../components/NavBar.js";
import { DailyButton, MonthlyButton } from "../components/SaveEnButtons.js";
import '../scroll.css'

const SelectButtons = () => {
    return (
        <VStack spacing={14}>
            <Text fontSize="2xl">What do you want to see in branch </Text>
            <HStack spacing={24}>
                <DailyButton url="/dailyBranch"/>
                <MonthlyButton />
            </HStack>
        </VStack>
    )
}

const AllAppliance = () => {
    return (
        <VStack spacing={5}>
            <VStack align="start" >
                <Text fontSize="3xl">Electricity Usage</Text>
                <Box bgColor="#C6F3D8" width="65vw" height="48vh" overflowY="scroll" pt={9} pb={7} align="center">
                    <ApplianceCard/>
                </Box>
            </VStack>
            <HStack justify="flex-end" width="65vw">
                <Text fontSize="xl">Electricity Payment Estimation:</Text>
            </HStack>
        </VStack>
    )
}

const branchSelect = () => {
    return (
        <Box backgroundColor="#D9FFFD" minHeight="100vh" minWidth="100%" position="absolute">
            <NavBar />
            <VStack mt="24vh" mb="18vh" spacing={32}>
                <SelectButtons />
                <AllAppliance />
            </VStack>
        </Box>
    );
};

export default branchSelect;