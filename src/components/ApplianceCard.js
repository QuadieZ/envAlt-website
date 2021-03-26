import { Image } from "@chakra-ui/image";
import { HStack, Text, VStack } from "@chakra-ui/layout"

const appliaces = [
    {
        "name": "Refrigerator",
        "isOnOff": false,
        "status": "16 C",
        "electricity": "1000 kw",
        "url": "refri.png"
    },
    {
        "name": "Sandwich Maker",
        "isOnOff": true,
        "status": "Off",
        "electricity": "500 kw",
        "url": "sand.png"
    }, {
        "name": "Air Conditioner",
        "isOnOff": false,
        "status": "25 C",
        "electricity": "1500kw",
        "url": "air.png"
    }
]

export const ApplianceCard = () => {
    return (
        appliaces.map((appliance, index) => (
            <HStack background="#FFFFFF"
                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                borderRadius="30px"
                width="90%"
                height="40%"
                mb="1.5rem"
                align="center"
                justify="center"
                padding={8}
                spacing={8}>
                <Text fontSize="4xl">{index + 1}</Text>
                <VStack align="start" textAlign="left" minWidth="fit-content">
                    <Text fontSize="2xl">{appliance.name}</Text>
                    <Text fontSize="xl">{appliance.isOnOff ? "Status:" : "Temperature:"} {appliance.status}</Text>
                </VStack>
                <VStack >
                    <Text fontSize="lg">Electricity Consumed</Text>
                    <Text fontSize="xl">{appliance.electricity}</Text>
                </VStack>
                <Image src={"/assets/" + appliance.url} position="relative" width="20%" maxHeight="180%" objectFit="contain"/>
            </HStack>
        ))
    )
}