import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
} from "@chakra-ui/react"
import { useEffect, useState } from "react";

const customerInfo = [
    {
        time: "13.00",
        people: 10
    },
    {
        time: "14.00",
        people: 15
    },
    {
        time: "15.00",
        people: 12
    }
]


const customerInfoTemp = [
]

const carbonInfo = [
    {
        time: "13.00",
        carbon: 0.034
    },
    {
        time: "14.00",
        carbon: 0.06
    },
    {
        time: "15.00",
        carbon: 0.028
    },
]

const InfoTable = (props) => {
    const { color, column, children } = props;
    return (
        <Table variant="simple" fontSize="md">
            <Thead bgColor={color}  >
                <Tr>
                    <Th textAlign="center" fontSize="md" py={4}>Time</Th>
                    <Th textAlign="center" fontSize="md" py={4}>{column}</Th>
                </Tr>
            </Thead>
            <Tbody bgColor="white">
                {children}
            </Tbody>
        </Table>
    )
}

export const CustomerTable = ({ data }) => {
    const [customer, setCustomer] = useState([])
    

    useEffect(() => {
        if (data !== []) {
            setCustomer(data)
        }

    },[data])


    return (
        <InfoTable column="Number of People" color="#9EEFDC">
            {customer.map((el) => {
                return (
                    <Tr>
                        <Td textAlign="center">{el.time}</Td>
                        <Td textAlign="center">{el.people}</Td>
                    </Tr>
                )
            })}
        </InfoTable>
    )
}

export const CarbonTable = ({ data }) => {
    const [carbon, setCarbon] = useState([])
    useEffect(() => {
        if (data !== []) {
            setCarbon(data)
        }

    },[data])

    return (
        <InfoTable column="Amount" color="#FFC3D5">
            {carbon.map((el) => {
                return (
                    <Tr>
                        <Td textAlign="center">{el.time}</Td>
                        <Td textAlign="center">{el.amount}</Td>
                    </Tr>
                )
            })}
        </InfoTable>
    )
}