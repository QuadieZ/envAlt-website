import AppHeader from "../components/AppHeader";
import { Box, VStack } from "@chakra-ui/layout";
import { OverallButton, SpecificButton } from "../components/SaveEnButtons";

const MainPage = () => {
    return (
        <Box
            bgImage="url('/assets/mainBg.png')"
            bgPosition="center"
            bgSize="100% 100%"
            bgRepeat="no-repeat"
            minHeight="100vh"
            >
            <AppHeader />
            <Box>
                <VStack
                    spacing={14}
                    align="center"
                >
                    <SpecificButton/>
                    <OverallButton/>
                </VStack>
            </Box>

        </Box>
    );
};

export default MainPage;