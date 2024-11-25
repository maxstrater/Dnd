import { useState, useEffect } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Box,
    SimpleGrid,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Center,
    Image,
    Badge,
    GridItem,
    Grid,
    Container,
    Heading,
    Text,
    Img,
    Flex,
    useColorModeValue,
    HStack,

} from '@chakra-ui/react'
import Spell from './Spell';

function SpellView({ player, setPlayer }) {
    const [spellInfo, setSpellInfo] = useState(null);

    useEffect(() => {
        // Fetch the spells as soon as the component is mounted
        const fetchSpells = async () => {
            if (!player?.basicInfo?.className || !player?.basicInfo?.level) {
                console.error('Player class or level is not defined.');
                return;
            }

            try {
                const response = await fetch(
                    `https://www.dnd5eapi.co/api/classes/${player.basicInfo.className}/spells`
                );
                const data = await response.json();

                // Filter spells by level
                const filteredSpells = data.results.filter((spell) =>
                    spell.level ? spell.level <= player.basicInfo.level : true
                );

                // Fetch full spell details for each spell
                const spellDetails = await Promise.all(
                    filteredSpells.map(async (spell) => {
                        const spellResponse = await fetch(`https://www.dnd5eapi.co${spell.url}`);
                        return spellResponse.json();
                    })
                );

                // Map API response to `Spell` objects
                const spellObjects = spellDetails.map(
                    (spell) =>
                        new Spell(
                            spell.name,
                            spell.level,
                            spell.desc?.[0] || '',
                            spell.components,
                            spell.school.name
                        )
                );

                setSpellInfo(spellObjects);
            } catch (error) {
                console.error('Error fetching spells:', error);
            }
        };

        fetchSpells(); // Call the fetchSpells function
    }, [player]); // Add `player` as a dependency

    return (
        <>
            {spellInfo ? (
                spellInfo.map((spell, index) => <SpellCard key={index} spell={spell} />)
            ) : (
                <Text>Loading spells...</Text>
            )}
        </>
    );
}

function SpellCard({ spell }) {
    return (

        <Center py={6}>
            <Box
                w="xs"
                rounded="sm"
                my={5}
                mx={[0, 5]}
                overflow="hidden"
                bg="white"
                border="1px"
                borderColor="black"
                boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan')}
                transition="all 0.1s ease-in" // Smooth transition for the hover effect
                _hover={{
                    boxShadow: useColorModeValue(
                        '10px 10px 0 orange', // Shadow on hover in light mode
                        '10px 10px 0 orange' // Shadow on hover in dark mode
                    ),
                    transform: 'scale(1.05)', // Slightly enlarge the card on hover
                }}
            >
                <Box h="200px" borderBottom="1px" borderColor="black">
                    <Img
                        roundedTop="sm"
                        objectFit="contain"
                        h="full"
                        w="full"
                        alt={spell.name}
                    />
                </Box>
                <Box p={4}>
                    <Heading color="black" fontSize="2xl" noOfLines={1}>
                        {spell.name}
                    </Heading>
                    <Text color="gray.500" noOfLines={2}>
                        Level {spell.level} - {spell.school}
                    </Text>
                    <Text color="gray.600" fontSize="sm" noOfLines={3}>
                        {spell.description}
                    </Text>
                </Box>
                <HStack borderTop="1px" color="black" spacing={20}>
                    <Flex
                        p={4}
                        alignItems="center"
                        justifyContent="center"
                        roundedBottom="sm"
                        cursor="pointer"
                    >
                        {/* Example Action Button or Placeholder */}
                        <Text fontSize="sm" fontWeight="semibold">
                            View Details
                        </Text>
                    </Flex>
                </HStack>
            </Box>
        </Center>
    );
}





export default SpellView;
