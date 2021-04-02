import { Box, HStack, Text, VStack } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { RecommendCard } from "../components/RecommendCard";
import RecommendationService from '../services/recommendService';

const recommendationService = new RecommendationService();

const tempData = {
    "branchid": "",
    "recommendation": [
        {
            "date": "",
            "time": "",
            "message": []
        },
    ],
}

const RecommendPage = () => {
    const [branchId, setBranchId] = useState(tempData.branchid)
    const [recom, setRecom] = useState(tempData.recommendation)

    useEffect(() => {
        if (branchId === "") {
            async function fetchData() {
                const overallInfo = await recommendationService.getRecommendations();
                setBranchId(overallInfo.branchid)
                setRecom(overallInfo.recommendation)
            }
            fetchData();
        }
    });
    console.log(branchId)
    console.log(recom)

    return (
        <Box backgroundColor="#B7F0F0" minHeight="100vh" minWidth="100%" position="absolute">
            <NavBar />

            <VStack minHeight="100vh" minWidth="100%" position="absolute" align="center" justify="center">
                <VStack width="70vw" bgColor="#FFFFFF" height="55vh" position="relative" boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)">
                    <HStack position="absolute" width="100%" height="15%" bgColor="#A6D7E1" align="center" justify="left" pl="3%">
                        <Text fontSize="3xl">Recommendations</Text>
                    </HStack>
                    <Box width="100%" height="100%" overflowY="scroll" pt={20} pb={7} align="center">
                        <RecommendCard data={recom}/>
                    </Box>
                </VStack>
            </VStack>

        </Box>
    )
}

export default RecommendPage;