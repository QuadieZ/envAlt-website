import { Box, HStack, Text, VStack } from "@chakra-ui/layout";
import { DatePickerField } from "../components/DatePickerField";
import { CustomerTable, CarbonTable } from "../components/InfoTable";
import NavBar from "../components/NavBar";
import DailyBranchService from '../services/dailyBranchService';
import { useState, useEffect } from 'react';
import Line from "../components/Line";

const tempData = 
    {
        "branchid": "",
        "customer_record": [
            // {
            //     time: "",
            //     people: 0
            // },
            // {
            //     time: "",
            //     people: 0
            // },
            // {
            //     time: "",
            //     people: 0
            // }
        ],
        "estimation_co2": [],
        "graphData": []
    }

const dailyBranchService = new DailyBranchService();

const DailyBranch = () => {


    const [branchId, setBranchId] = useState("")
    const [customer, setCustomer] = useState(tempData.customer_record)
    const [carbon, setCarbon] = useState(tempData.estimation_co2)
    const [graph, setGraph] = useState(tempData.graphData)

    useEffect(() => {
        if (branchId === "") {
            async function fetchData() {
                const info = await dailyBranchService.getBranchDailyInfo();

                setBranchId(info.branchid)
                setCustomer(info.customer_record)
                setCarbon(info.estimation_co2)
                setGraph(info.graphData)
            }
            fetchData();
        }

    },);

    return (
        <Box backgroundColor="#C9F8F2" minHeight="100vh" minWidth="100%" position="absolute">
            <NavBar />
            <VStack mt="18vh" mb="18vh" spacing={24}>
                <VStack>
                    <Text fontSize="2xl">Electrical Appliances Performance of Branch {branchId}</Text>
                    <HStack justify="flex-end" width="100%" pr="15%">
                        <Text fontSize="lg">Date: </Text>
                        <DatePickerField />
                    </HStack>
                </VStack>
                <VStack width="70vw" align="flex-start">
                    <Text fontSize="xl">Customer Record</Text>
                    <CustomerTable data={customer}/>
                </VStack>
                <VStack width="70vw" align="flex-start">
                    <Text fontSize="xl">Estimation CO2 Release(หน่วย?)</Text>
                    <CarbonTable data={carbon} />
                </VStack>
                <VStack width="70vw" align="flex-start">
                    <Text fontSize="xl">Estimation CO2 Release(หน่วย?)</Text>
                    <div style={{ height: 500, width: "100%", backgroundColor: "white" }}>
                        <Line d={graph} />
                    </div>
                </VStack>

            </VStack>
        </Box>
    )
}

export default DailyBranch;