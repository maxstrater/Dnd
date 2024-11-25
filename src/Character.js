
import React from 'react';
import Player from './Player';
import { Grid, GridItem, Heading, Text, Box, HStack, Center, SimpleGrid, CircularProgress, List, ListItem, Checkbox, Input, Flex, VStack, StackDivider } from '@chakra-ui/react';

function CharacterSheet({ character }) {

    return (
        <Box>
            <Heading size="md">{character.basicInfo.name}</Heading>
            <Heading size="sm">{character.basicInfo.race}</Heading>
            <Text><strong>Class:</strong> {character.basicInfo.className} | Level: {character.basicInfo.level}</Text>
            <SimpleGrid columns={3} spacing={4} p={5}>
                {/* Column 1: Ability Scores and Skills */}
                <GridItem colSpan={1}>
                    {/* Ability Scores */}
                    <Heading size="md" mb={4}>Ability Scores</Heading>
                    <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                        {["S", "D", "Co", "I", "W", "Ch"].map((score, index) => (
                            <Center
                                key={index}
                                w="50px"
                                h="50px"
                                borderRadius="full"
                                bg="gray.200"
                                border="2px solid black"
                                flexDir="column"
                            >
                                <Text fontSize="lg">{score}</Text>
                                <Text fontSize="sm">+1</Text>
                            </Center>
                        ))}
                    </Grid>

                    {/* Skills */}
                    <Heading size="md" mt={6} mb={4}>Skills</Heading>
                    <List spacing={2}>
                        {[
                            { skill: "Acrobatics", stat: "DEX", value: "+2" },
                            { skill: "Arcana", stat: "INT", value: "+1" },
                            { skill: "Athletics", stat: "STR", value: "+3" },
                            // Add more skills here
                        ].map(({ skill, stat, value }, index) => (
                            <ListItem key={index} display="flex" alignItems="center">
                                <Checkbox mr={2}></Checkbox>
                                <Text mr={2}>{skill} ({stat})</Text>
                                <Text ml="auto">{value}</Text>
                            </ListItem>
                        ))}
                    </List>
                </GridItem>

                {/* Column 2: Inventory and Features/Traits */}
                <GridItem colSpan={1}>
                    {/* Inventory */}
                    <Heading size="md" mb={4}>Inventory</Heading>
                    <Box borderWidth="1px" p={4} borderRadius="md">
                        <List spacing={3}>
                            {["Sword", "Potion of Healing", "Shield"].map((item, index) => (
                                <ListItem key={index}>
                                    <Text>{item}</Text>
                                </ListItem>
                            ))}
                        </List>
                    </Box>

                    {/* Features and Traits */}
                    <Heading size="md" mt={6} mb={4}>Features and Traits</Heading>
                    <Box borderWidth="1px" p={4} borderRadius="md" overflowY="auto" h="200px">
                        <Text mb={2}>Class Features</Text>
                        <Text fontSize="sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum.
                        </Text>
                    </Box>
                </GridItem>

                {/* Column 3: Actions, Abilities, and Spells */}
                <GridItem colSpan={1}>
                    <Heading size="md" mb={4}>Actions</Heading>
                    <VStack spacing={4} divider={<StackDivider borderColor="gray.200" />}>
                        <Box p={4} borderWidth="1px" w="100%" borderRadius="md">
                            <Text>Quarterstaff Attack</Text>
                            <Text>+4 to hit, 1d6+2 damage</Text>
                        </Box>
                        <Box p={4} borderWidth="1px" w="100%" borderRadius="md">
                            <Text>Unarmed Strike</Text>
                            <Text>+4 to hit, 1d4 damage</Text>
                        </Box>
                    </VStack>

                    {/* Spells */}
                    <Heading size="md" mt={6} mb={4}>Spells</Heading>
                    <VStack spacing={4}>
                        <Box p={4} borderWidth="1px" w="100%" borderRadius="md">
                            <Text>Fireball</Text>
                            <Text>Level 3, 60 ft range</Text>
                        </Box>
                        <Box p={4} borderWidth="1px" w="100%" borderRadius="md">
                            <Text>Healing Word</Text>
                            <Text>Level 1, 30 ft range</Text>
                        </Box>
                    </VStack>
                </GridItem>
            </SimpleGrid>
        </Box>
    );
}

export default CharacterSheet