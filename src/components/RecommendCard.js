import { HStack, Text, VStack } from "@chakra-ui/layout"
import { useEffect, useState } from "react"

const notifications = [
    {
        "date": "18/03/2021",
        "time": "18.00",
        "body": [
            "19.00 Change air temperature to 26 celcius",
            "20.00 turn off microwave"
        ]
    },
    {
        "date": "18/03/2021",
        "time": "21.00",
        "body": [
            "22.00 turn off sandwich maker",
        ]
    }
]

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


export const RecommendCard = ({data}) => {
    const [recom, setRecom] = useState(tempData.recommendation)
    console.log(data)
    useEffect(() => {
        if (data !== []) {
            setRecom(data)
        }

    },[data])
    
    return (
        recom.map((noti, index) => (
            <VStack background="#F6F6F6"
                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                borderRadius="30px"
                width="90%"
                minHeight="40%"
                height="fit-content"
                mb="1.5rem"
                align="flex-start"
                justify="center"
                px={8}
                py={2}>
                <HStack fontSize="lg" color="#ED6A6A" spacing={3}>
                    <Text >{noti.date}</Text>
                    <Text>{noti.time}</Text>
                </HStack>
                <VStack align="flex-start" pl="15%" color="#8B8585">
                    {noti.message.map((e) => (
                        <Text fontSize="md">{e}</Text>
                    ))}
                </VStack>
            </VStack>
        ))
    )
}