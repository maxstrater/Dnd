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
import Player from './Player';

function ClassView({ player, setPlayer, classInfo, setClassInfo }) {
  const handleClassSelection = (className, level) => {

    // To trigger React's state update, recreate the Player instance
    setPlayer(new Player(player.basicInfo.name, className, level, player.basicInfo.race));


  };


  return (
    <div>
      <SimpleGrid columns={3} spacing={10}>
        {/* Pass handleClassSelection function to ClassCard */}
        <ClassCard className='barbarian' onSelectClass={handleClassSelection} />
        <ClassCard className='bard' onSelectClass={handleClassSelection} />
        <ClassCard className='cleric' onSelectClass={handleClassSelection} />
        <ClassCard className='druid' onSelectClass={handleClassSelection} />
        <ClassCard className='fighter' onSelectClass={handleClassSelection} />
        <ClassCard className='monk' onSelectClass={handleClassSelection} />
        <ClassCard className='paladin' onSelectClass={handleClassSelection} />
        <ClassCard className='ranger' onSelectClass={handleClassSelection} />
        <ClassCard className='rogue' onSelectClass={handleClassSelection} />
        <ClassCard className='sorcerer' onSelectClass={handleClassSelection} />
        <ClassCard className='warlock' onSelectClass={handleClassSelection} />
        <ClassCard className='wizard' onSelectClass={handleClassSelection} />
      </SimpleGrid>
    </div>
  );
}

function ClassCard({ className, onSelectClass }) {
  const info = {
    cName: "",
    description: "",
    cImg: ""
  };

  // Switch logic for different classes
  switch (className) {
    case 'barbarian':
      info.cName = "Barbarian"
      info.description = "A fierce warrior who can enter a battle rage"
      info.cImg = "https://www.dndbeyond.com/avatars/thumbnails/6/342/420/618/636272680339895080.png"
      break;
    case 'bard':
      info.cName = "Bard"
      info.description = "An inspiring magician whose power echoes the music of creation"
      info.cImg = "https://www.dndbeyond.com/avatars/thumbnails/6/369/420/618/636272705936709430.png"
      break;
    case 'cleric':
      info.cName = "Cleric"
      info.description = "A Miraculous Priest of Divine Power"
      info.cImg = "https://www.dndbeyond.com/attachments/thumbnails/5/547/300/437/half-elf.png"
      break;
    case 'druid':
      info.cName = "Druid"
      info.description = "A priest of the Old Faith, wielding the powers of nature and adopting animal forms"
      info.cImg = "https://www.dndbeyond.com/avatars/thumbnails/6/346/420/618/636272691461725405.png"
      break;
    case 'fighter':
      info.cName = "Fighter"
      info.description = "A master of martial combat, skilled with a variety of weapons and armor"
      info.cImg = "https://www.dndbeyond.com/avatars/thumbnails/6/359/420/618/636272697874197438.png"
      break;
    case 'monk':
      info.cName = "Monk"
      info.description = "A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection"
      info.cImg = "https://www.dndbeyond.com/avatars/thumbnails/6/489/420/618/636274646181411106.png"
      break;
    case 'paladin':
      info.cName = "Paladin"
      info.description = "A holy warrior bound to a sacred oath"
      info.cImg = "https://www.dndbeyond.com/avatars/thumbnails/6/365/420/618/636272701937419552.png"
      break;
    case 'ranger':
      info.cName = "Ranger"
      info.description = "A warrior who combats threats on the edges of civilization"
      info.cImg = "https://www.dndbeyond.com/avatars/thumbnails/6/367/420/618/636272702826438096.png"
      break;
    case 'rogue':
      info.cName = "Rogue"
      info.description = "A scoundrel who uses stealth and trickery to overcome obstacles and enemies"
      info.cImg = "https://www.dndbeyond.com/avatars/thumbnails/6/384/420/618/636272820319276620.png"
      break;
    case 'sorcerer':
      info.cName = "Sorcerer"
      info.description = "A spellcaster who draws on inherent magic from a gift or bloodline"
      info.cImg = "https://www.dndbeyond.com/avatars/thumbnails/6/485/420/618/636274643818663058.png"
      break;
    case 'warlock':
      info.cName = "Warlock"
      info.description = "A wielder of magic that is derived from a bargain with an extraplanar entity"
      info.cImg = "https://www.dndbeyond.com/avatars/thumbnails/6/375/420/618/636272708661726603.png"
      break;
    case 'wizard':
      info.cName = "Wizard"
      info.description = "A scholarly magic-user capable of manipulating the structures of reality"
      info.cImg = "https://www.dndbeyond.com/avatars/thumbnails/6/357/420/618/636272696881281556.png"
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
          <GetClassModalButton className={className} />
          <Flex
            p={4}
            alignItems="flex-end"
            justifyContent={'center'}
            roundedBottom={'sm'}
            borderLeft={'1px'}
            cursor="pointer">
            <SelectButton className={className} onSelectClass={onSelectClass} />
          </Flex>
        </HStack>
      </Box>
    </Center>
    // <Box display='flex' justifyContent='center' alignItems='center'>
    //   <Box boxShadow='base' maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
    //     <Box display='flex' justifyContent='flex-end'>
    //       <SelectButton className={className} onSelectClass={onSelectClass} />
    //     </Box>
    //     <Box display='flex' justifyContent='center' alignItems='center'>
    //       <Image
    //         src={info.cImg}
    //         alt={className}
    //         boxSize="250px"
    //         objectFit="contain"
    //       />
    //     </Box>

    //     <Box p='6' maxW='sm'>
    //       <Grid templateColumns='repeat(4, 1fr)' gap={1}>
    //         <GridItem colSpan={2}>
    //           <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight' noOfLines={1} fontSize={24}>
    //             {info.cName}
    //           </Box>
    //         </GridItem>
    //         <GridItem colStart={4}>
    //           <Box>
    //             <GetClassModalButton className={className} />
    //           </Box>
    //         </GridItem>
    //       </Grid>
    //       <Box mt='2' fontSize='md' maxW='auto'>
    //         {info.description}
    //       </Box>
    //     </Box>
    //   </Box>
    // </Box>
  );
}

function SelectButton({ className, onSelectClass }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [level, setLevel] = useState(1); // State to store the selected level

  const handleChange = (value) => {
    setLevel(Number(value)); // Update the level state
  };

  const handleSubmit = () => {
    onSelectClass(className, level);  // Use onSelectClass to update classInfo and player
    // console.log("Selected Class:", className);
    // console.log("Selected level:", level);
    onClose();
  };

  return (
    <>
      <Box h={'100%'} w={'100%'} onClick={onOpen}
        cursor="pointer"
        display={'flex'}
        justifyContent={'center'}
      >
        <Text fontSize='xx-large' fontWeight='semibold' fontFamily={'monospace'}>
          +
        </Text>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{className}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              Select level:
              <NumberInput
                size='md'
                maxW={24}
                defaultValue={1}
                min={1}
                max={20}
                ml={5}
                onChange={handleChange}
                value={level}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Center>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleSubmit}>
              Select
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}


function GetClassModalButton({ className }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [classInfo, setClassInfo] = useState(null);

  const clas = className;

  const fetchClassDescription = (classInput) => {
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch("https://www.dnd5eapi.co/api/classes/" + classInput, requestOptions)
      .then((response) => response.json())  // Using JSON instead of text
      .then((result) => {
        console.log(result)
        const parsedInfo = {
          name: result.name,  // Class name
          hit_die: result.hit_die,  // Hit dice for the class
          proficiencies: result.proficiencies.map(p => p.name).join(', '),  // Proficiencies
        };
        setClassInfo(parsedInfo);  // Update state with parsed info  // Update state with API response
        onOpen();
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <Flex onClick={() => fetchClassDescription(clas)}
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
          <ModalHeader>{classInfo ? classInfo.name : className}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {classInfo ? (
              <div>
                <p><strong>Class Name:</strong> {classInfo.name}</p>
                <p><strong>Hit Die:</strong> d{classInfo.hit_die}</p>
                <p><strong>Proficiencies:</strong> {classInfo.proficiencies}</p>
              </div>
            ) : (
              <p>No class information loaded yet.</p>
            )}
          </ModalBody>
          <ModalFooter>
            <Box mr={3}>
              <GetClassLevelButton className={className} />
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

function GetSpellsForClassButton({ className, level }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [spellInfo, setSpellInfo] = useState([]);

  const clas = className;

  const fetchClassDescription = (classInput) => {
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch("https://www.dnd5eapi.co/api/classes/" + classInput + "/levels/" + level + "/spells", requestOptions)
      .then((response) => response.json())  // Using JSON instead of text
      .then((result) => {
        console.log(result)
        const parsedInfo = {
          count: result.count,
          spells: result.results.map(p => p.name).join(', '),
        };
        setSpellInfo(parsedInfo);
        onOpen();
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <Button fontSize='sm' onClick={() => fetchClassDescription(clas)}>LVL.{level + 1} spells</Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Spells for {className} at level {level + 1}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {spellInfo.spells ? (
              <div>
                {spellInfo.spells}
              </div>
            ) : (
              <p>No spells loaded</p>
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

function GetClassLevelButton({ className }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [classInfo, setClassInfo] = useState([]);  // Initialize as an empty array
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0);

  const fetchClassDescription = (classInput) => {
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://www.dnd5eapi.co/api/classes/" + classInput + "/levels", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result)
        const parsedInfo = result.map((levelInfo) => ({
          level: levelInfo.level,
          ability_score_bonuses: levelInfo.ability_score_bonuses,
          prof_bonus: levelInfo.prof_bonus,
          features: levelInfo.features ? levelInfo.features.map((f) => f.name).join(', ') : 'No features available',
          class_specific: levelInfo.class_specific, // Keep it flexible for each class
          spellcasting: levelInfo.spellcasting || null,  // Handle spellcasting if present
          class: levelInfo.class?.name || 'Unknown Class',
        }));

        setClassInfo(parsedInfo);  // Store parsed array of levels
        setCurrentLevelIndex(0);  // Start at the first level
        onOpen();
      })
      .catch((error) => console.error(error));
  };

  const handleNext = () => {
    if (currentLevelIndex < classInfo.length - 1) {
      setCurrentLevelIndex(currentLevelIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentLevelIndex > 0) {
      setCurrentLevelIndex(currentLevelIndex - 1);
    }
  };
  return (
    <>
      <Button onClick={() => fetchClassDescription(className)}>Class Level Details</Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{className} - Level {classInfo.length > 0 ? classInfo[currentLevelIndex].level : ''}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {classInfo.length > 0 ? (
              <div>
                <p><strong>Ability Score Bonus:</strong> {classInfo[currentLevelIndex].ability_score_bonuses}</p>
                <p><strong>Proficiency Bonus:</strong> {classInfo[currentLevelIndex].prof_bonus}</p>
                <p><strong>Features:</strong> {classInfo[currentLevelIndex].features}</p>

                {classInfo[currentLevelIndex].class_specific && (
                  <div>
                    {classInfo[currentLevelIndex].class_specific.rage_count !== undefined && (
                      <p><strong>Rage Count:</strong> {classInfo[currentLevelIndex].class_specific.rage_count}</p>
                    )}
                    {classInfo[currentLevelIndex].class_specific.rage_damage_bonus !== undefined && (
                      <p><strong>Rage Damage Bonus:</strong> {classInfo[currentLevelIndex].class_specific.rage_damage_bonus}</p>
                    )}
                    {classInfo[currentLevelIndex].class_specific.bardic_inspiration_die !== undefined && (
                      <p><strong>Bardic Inspiration Die:</strong> {classInfo[currentLevelIndex].class_specific.bardic_inspiration_die}</p>
                    )}
                    {classInfo[currentLevelIndex].class_specific.song_of_rest_die !== undefined && (
                      <p><strong>Song of Rest Die:</strong> {classInfo[currentLevelIndex].class_specific.song_of_rest_die}</p>
                    )}
                    {classInfo[currentLevelIndex].class_specific.channel_divinity_charges !== undefined && (
                      <p><strong>Channel Divinity Charges:</strong> {classInfo[currentLevelIndex].class_specific.channel_divinity_charges}</p>
                    )}
                    {classInfo[currentLevelIndex].class_specific.destroy_undead_cr !== undefined && (
                      <p><strong>Destroy Undead CR:</strong> {classInfo[currentLevelIndex].class_specific.destroy_undead_cr}</p>
                    )}
                    {classInfo[currentLevelIndex].class_specific.wild_shape_fly !== undefined && (
                      <p><strong>Wild Shape Fly:</strong> {classInfo[currentLevelIndex].class_specific.wild_shape_fly.toString()}</p>
                    )}
                    {classInfo[currentLevelIndex].class_specific.wild_shape_swim !== undefined && (
                      <p><strong>Wild Shape Swim:</strong> {classInfo[currentLevelIndex].class_specific.wild_shape_swim.toString()}</p>
                    )}
                    {classInfo[currentLevelIndex].class_specific.wild_shape_max_cr !== undefined && (
                      <p><strong>Wild Shape Max CR:</strong> {classInfo[currentLevelIndex].class_specific.wild_shape_max_cr}</p>
                    )}
                    {classInfo[currentLevelIndex].class_specific.action_surges !== undefined && (
                      <p><strong>Action Surges:</strong> {classInfo[currentLevelIndex].class_specific.action_surges}</p>
                    )}
                    {classInfo[currentLevelIndex].class_specific.extra_attacks !== undefined && (
                      <p><strong>Extra Attacks:</strong> {classInfo[currentLevelIndex].class_specific.extra_attacks}</p>
                    )}
                    {classInfo[currentLevelIndex].class_specific.indomitable_uses !== undefined && (
                      <p><strong>Indomitable Uses:</strong> {classInfo[currentLevelIndex].class_specific.indomitable_uses}</p>
                    )}
                    {classInfo[currentLevelIndex].class_specific.ki_points !== undefined && (
                      <p><strong>Ki Points:</strong> {classInfo[currentLevelIndex].class_specific.ki_points}</p>
                    )}
                    {classInfo[currentLevelIndex].class_specific.unarmored_movement !== undefined && (
                      <p><strong>Unarmored Movement:</strong> {classInfo[currentLevelIndex].class_specific.unarmored_movement}</p>
                    )}
                    {classInfo[currentLevelIndex].class_specific.martial_arts !== undefined && (
                      <div>
                        <p><strong>Martial Arts:</strong></p>
                        <p> - Dice Count: {classInfo[currentLevelIndex].class_specific.martial_arts.dice_count}</p>
                        <p> - Dice Value: {classInfo[currentLevelIndex].class_specific.martial_arts.dice_value}</p>
                      </div>
                    )}
                    {classInfo[currentLevelIndex].class_specific.aura_range !== undefined && (
                      <p><strong>Aura Range:</strong> {classInfo[currentLevelIndex].class_specific.aura_range}</p>
                    )}
                    {classInfo[currentLevelIndex].class_specific.favored_enemies !== undefined && (
                      <p><strong>Favored Enemies:</strong> {classInfo[currentLevelIndex].class_specific.favored_enemies}</p>
                    )}
                    {classInfo[currentLevelIndex].class_specific.favored_terrain !== undefined && (
                      <p><strong>Favored Terrain:</strong> {classInfo[currentLevelIndex].class_specific.favored_terrain}</p>
                    )}
                    {classInfo[currentLevelIndex].class_specific.sneak_attack !== undefined && (
                      <div>
                        <p><strong>Sneak Attack:</strong></p>
                        <p> - Dice Count: {classInfo[currentLevelIndex].class_specific.sneak_attack.dice_count}</p>
                        <p> - Dice Value: {classInfo[currentLevelIndex].class_specific.sneak_attack.dice_value}</p>
                      </div>
                    )}
                    {classInfo[currentLevelIndex].class_specific.metamagic_known !== undefined && (
                      <p><strong>Meta Magic Known:</strong> {classInfo[currentLevelIndex].class_specific.metamagic_known}</p>
                    )}
                    {classInfo[currentLevelIndex].class_specific.sorcery_points !== undefined && (
                      <p><strong>Sorcery Points:</strong> {classInfo[currentLevelIndex].class_specific.sorcery_points}</p>
                    )}
                    {classInfo[currentLevelIndex].class_specific.creating_spell_slots !== undefined && (
                      <div>
                        <p><strong>Spell Slot Restoration:</strong></p>
                        {classInfo[currentLevelIndex].class_specific.creating_spell_slots.map((slot, index) => (
                          <div key={index}>
                            <p> - Spell Slot Level: {slot.spell_slot_level}</p>
                            <p> - Sorcery Point Cost: {slot.sorcery_point_cost}</p>
                            <p>------------------------------------</p>
                          </div>
                        ))}
                      </div>
                    )}
                    {classInfo[currentLevelIndex].class_specific.invocations_known !== undefined && (
                      <p><strong>Invocations Known:</strong> {classInfo[currentLevelIndex].class_specific.invocations_known}</p>
                    )}
                    {classInfo[currentLevelIndex].class_specific.arcane_recovery_levels !== undefined && (
                      <p><strong>Arcane Recovery Levels:</strong> {classInfo[currentLevelIndex].class_specific.arcane_recovery_levels}</p>
                    )}
                  </div>
                )}
                {classInfo[currentLevelIndex].spellcasting && (
                  <div>
                    <p><strong>Cantrips Known:</strong> {classInfo[currentLevelIndex].spellcasting.cantrips_known}</p>
                    <p><strong>Spells Known:</strong> {classInfo[currentLevelIndex].spellcasting.spells_known}</p>
                    <p><strong>Spell Slots:</strong> {classInfo[currentLevelIndex].spellcasting.spell_slots_level_1}</p>
                  </div>
                )}
              </div>
            ) : (
              <p>No class information loaded yet.</p>
            )}
          </ModalBody>
          <ModalFooter>
            <SimpleGrid columns={4} spacing={4}>
              <GetSpellsForClassButton className={className} level={currentLevelIndex} />
              <Button onClick={handlePrevious} disabled={currentLevelIndex === 0}>
                Previous
              </Button>
              <Button onClick={handleNext} disabled={currentLevelIndex === classInfo.length - 1}>
                Next
              </Button>
              <Button colorScheme='blue' onClick={onClose}>
                Close
              </Button>
            </SimpleGrid>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}




export default ClassView;
