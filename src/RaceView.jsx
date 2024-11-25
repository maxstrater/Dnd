import { useState } from 'react';
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
    Image,
    Badge,
    GridItem,
    Grid,
    Container,
    SimpleGrid,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Heading,
    Text,
    Img,
    Flex,
    Center,
    useColorModeValue,
    HStack,

} from '@chakra-ui/react'
import Player from './Player';

function RaceView({ player, setPlayer, raceInfo, setRaceInfo }) {

    const handleRaceSelection = (race) => {
        // To trigger React's state update, recreate the Player instance
        setPlayer(new Player(player.basicInfo.name, player.basicInfo.className, player.basicInfo.level, race));
    }

    return (
        <>
            <SimpleGrid columns={3} spacing={10}>
                <RaceCard race='dragonborn' onSelectRace={handleRaceSelection} />
                <RaceCard race='dwarf' onSelectRace={handleRaceSelection} />
                <RaceCard race='elf' onSelectRace={handleRaceSelection} />
                <RaceCard race='gnome' onSelectRace={handleRaceSelection} />
                <RaceCard race='half-elf' onSelectRace={handleRaceSelection} />
                <RaceCard race='half-orc' onSelectRace={handleRaceSelection} />
                <RaceCard race='halfling' onSelectRace={handleRaceSelection} />
                <RaceCard race='human' onSelectRace={handleRaceSelection} />
                <RaceCard race='tiefling' onSelectRace={handleRaceSelection} />
            </SimpleGrid>
        </>
    )
}

function RaceCard({ race, onSelectRace }) {
    const info = {
        cName: "",
        description: "",
        cImg: ""
    };

    // Switch logic for different races 
    switch (race) {
        case 'dragonborn':
            info.cName = "Dragonborn"
            info.description = "Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail."
            info.cImg = "https://www.dndbeyond.com/avatars/thumbnails/6/340/420/618/636272677995471928.png"
            break;
        case 'dwarf':
            info.cName = "Dwarf"
            info.description = "Dwarves were raised from the earth in the elder days by a deity of the forge."
            info.cImg = "https://www.dndbeyond.com/avatars/thumbnails/6/254/420/618/636271781394265550.png"
            break;
        case 'elf':
            info.cName = "Elf"
            info.description = "The elves’ curiosity led many of them to explore other planes of existence."
            info.cImg = "https://www.dndbeyond.com/avatars/thumbnails/7/639/420/618/636287075350739045.png"
            break;
        case 'gnome':
            info.cName = "Gnome"
            info.description = "A gnome’s energy and enthusiasm for living shines through every inch of his or her tiny body"
            info.cImg = "https://static.wikia.nocookie.net/apia/images/4/4b/DeepGnome_DeepGnomeRockwarden.png"
            break;
        case 'half-elf':
            info.cName = "Half Elf"
            info.description = "Half-elves combine what some say are the best qualities of their elf and human parents."
            info.cImg = "https://www.dndbeyond.com/avatars/thumbnails/6/481/420/618/636274618102950794.png"
            break;
        case 'half-orc':
            info.cName = "Half Orc"
            info.description = "Some half-orcs rise to become proud leaders of orc communities. Some venture into the world to prove their worth. Many of these become adventurers, achieving greatness for their mighty deeds."
            info.cImg = "https://www.dndbeyond.com/avatars/thumbnails/6/466/420/618/636274570630462055.png"
            break;
        case 'halfling':
            info.cName = "Halfling"
            info.description = "Halflings possess a brave and adventurous spirit that leads them on journeys of discovery."
            info.cImg = "https://www.dndbeyond.com/avatars/thumbnails/6/256/420/618/636271789409776659.png"
            break;
        case 'human':
            info.cName = "Human"
            info.description = "Humans are the most adaptable and ambitious people among the common races. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds."
            info.cImg = "https://www.dndbeyond.com/avatars/thumbnails/6/258/420/618/636271801914013762.png"
            break;
        case 'tiefling':
            info.cName = "Tiefling"
            info.description = "To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: this is the lot of the tiefling."
            info.cImg = "https://www.dndbeyond.com/avatars/thumbnails/7/641/420/618/636287076637981942.png"
            break;
    }

    return (
        <Center py={6}>
            <Box
                w="xs"
                rounded={'sm'}
                my={5}
                mx={[0, 5]}
                overflow={'hidden'}
                bg="white"
                border={'1px'}
                borderColor="black"
                boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan')}
                transition="all 0.1s ease-in" // Smooth transition for the hover effect
                _hover={{
                    boxShadow: useColorModeValue(
                        '10px 10px 0 orange', // Shadow on hover in light mode
                        '10px 10px 0 orange' // Shadow on hover in dark mode
                    ),
                    transform: 'scale(1.05)', // Slightly enlarge the card on hover
                }}>
                <Box h={'200px'} borderBottom={'1px'} borderColor="black">
                    <Img
                        src={info.cImg}
                        roundedTop={'sm'}
                        objectFit="contain"
                        h="full"
                        w="full"
                        alt={'Race Image'}
                    />
                </Box>
                <Box p={4}>
                    <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
                        {info.cName}
                    </Heading>
                    <Text color={'gray.500'} noOfLines={3}>
                        {info.description}
                    </Text>
                </Box>
                <HStack borderTop={'1px'} color="black" spacing={20}>
                    <RaceModalButton race={race} />
                    <Flex
                        p={4}
                        alignItems="flex-end"
                        justifyContent={'center'}
                        roundedBottom={'sm'}
                        borderLeft={'1px'}
                        cursor="pointer">
                        <SelectButton race={race} onSelectRace={onSelectRace} />
                    </Flex>
                </HStack>
            </Box>
        </Center>
    )
    // return (
    //     <Box display='flex' justifyContent='center' alignItems='center'>
    //         <Box boxShadow='base' maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
    //             <Box display='flex' justifyContent='flex-end'>
    //                 <SelectButton race={race} onSelectRace={onSelectRace} />
    //             </Box>
    //             <Box display='flex' justifyContent='center' alignItems='center'>
    //                 <Image
    //                     src={info.cImg}
    //                     alt={race}
    //                     boxSize="250px"
    //                     objectFit="contain"
    //                 />
    //             </Box>

    //             <Box p='6' maxW='sm'>
    //                 <Grid templateColumns='repeat(4, 1fr)' gap={1}>
    //                     <GridItem colSpan={2}>
    //                         <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' noOfLines={1} fontSize={24}>
    //                             {info.cName}
    //                         </Box>
    //                     </GridItem>
    //                     <GridItem colStart={4}>
    //                         <Box>
    //                             <RaceModalButton race={race} />
    //                         </Box>
    //                     </GridItem>
    //                 </Grid>
    //                 <Box mt='2' fontSize='md' maxW='auto'>
    //                     {info.description}
    //                 </Box>
    //             </Box>
    //         </Box>
    //     </Box>
    // );
}


function SelectButton({ race, onSelectRace }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleSubmit = () => {
        onSelectRace(race);
        onClose();
    };

    return (
        <>
            <Box onClick={onOpen}
                cursor="pointer"
                display={'flex'}
                justifyContent={'center'}
            >
                {/* <Image
                    src="https://www.svgrepo.com/show/365656/plus-thin.svg"
                    alt="plus"
                    maxW="25%"
                    maxH="25%"
                    objectFit={"scale-down"}
                /> */}

                <Text fontSize='xx-large' fontWeight='semibold' fontFamily={'monospace'}>
                    +
                </Text>
            </Box>

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{race}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Confirm Select: {race}
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={handleSubmit}>
                            Select
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

function RaceModalButton({ race }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [raceInfo, setRaceInfo] = useState([]);

    const fetchRaceDescription = (raceInput) => {
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch("https://www.dnd5eapi.co/api/races/" + raceInput, requestOptions)
            .then((response) => response.json())  // Using JSON instead of text
            .then((result) => {
                console.log(result)
                const abilityBonuses = result.ability_bonuses.map((bonus) => {
                    return `${bonus.ability_score.name}: +${bonus.bonus}`;
                }).join(', '); // Join bonuses as a string

                // Create the parsed info object
                const parsedInfo = {
                    name: result.name,  // Race name
                    speed: result.speed,  // Speed
                    ability_bonus: abilityBonuses,  // Parsed ability bonuses
                };
                setRaceInfo(parsedInfo);  // Update state with parsed info  // Update state with API response
                onOpen();
            })
            .catch((error) => console.error(error));
    };


    return (
        <>
            <Flex onClick={() => fetchRaceDescription(race)}
                p={4}
                alignItems="center"
                justifyContent={'space-between'}
                roundedBottom={'sm'}
                cursor={'pointer'}
                w="full">
                <HStack spacing={15}>
                    <Text fontSize={'md'} fontWeight={'semibold'} whiteSpace={'nowrap'}>
                        More Info
                    </Text>
                    {/* <Image
                    src="https://www.svgrepo.com/show/349679/arrow-up-right.svg"
                    alt="upRightArrow"
                    maxW="25%"
                    maxH="25%"
                    objectFit="contain" // Ensures the image scales proportionally without distortion
                /> */}
                    <Text fontWeight={'semibold'}>
                        {"---->"}
                    </Text>
                </HStack>
            </Flex>



            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{raceInfo ? raceInfo.name : race}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {raceInfo ? (
                            <div>
                                <p><strong>Race Name:</strong> {raceInfo.name}</p>
                                <p><strong>Speed:</strong> {raceInfo.speed}</p>
                                <p><strong>Ability Bonuses:</strong> {raceInfo.ability_bonus}</p>
                            </div>
                        ) : (
                            <p>No class information loaded yet.</p>
                        )}
                    </ModalBody>
                    <ModalFooter>
                        <Box mr={3}>
                            <RaceTraitsButton race={race} />
                        </Box>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

function RaceTraitsButton({ race }) {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [raceInfo, setRaceInfo] = useState([]);

    const fetchRaceDescription = (raceInput) => {
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch("https://www.dnd5eapi.co/api/races/" + raceInput + "/traits", requestOptions)
            .then((response) => response.json())  // Using JSON instead of text
            .then((result) => {
                console.log(result)
                // Create the parsed info object
                const traits = result.results.map((trait) => trait.name).join(', '); // Get trait names as a comma-separated string

                // Create the parsed info object
                const parsedInfo = {
                    race: raceInput,  // The selected race
                    traits: traits,   // Parsed trait names
                };
                setRaceInfo(parsedInfo);  // Update state with parsed info  // Update state with API response
                onOpen();
            })
            .catch((error) => console.error(error));
    };

    return (
        <>
            <Button fontSize='sm' onClick={() => fetchRaceDescription(race)}>Traits</Button>
            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>traits for {race}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {raceInfo ? (
                            <div>
                                <p><strong>Race Name:</strong> {raceInfo.race}</p>
                                <p><strong>Traits:</strong> {raceInfo.traits}</p>
                            </div>
                        ) : (
                            <p>No traits loaded</p>
                        )}
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

function RaceProficiencysButton() {
    return (
        <>

        </>
    )
}

export default RaceView