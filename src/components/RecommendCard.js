import { HStack, Text, VStack } from "@chakra-ui/layout"

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

export const RecommendCard = () => {
    return (
        notifications.map((noti, index) => (
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
                    {noti.body.map((e) => (
                        <Text fontSize="md">{e}</Text>
                    ))}
                </VStack>
            </VStack>
        ))
    )
}