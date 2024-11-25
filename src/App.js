import ClassView from "./ClassView";
import PlayerClass from "./Class.js";
import Player from "./Player.js"; // Assuming Player is the structure of the player object
import CharacterSheet from "./Character.js";
import { useState, useEffect, useRef } from 'react';
import './sticky.css';
import {
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,
    Tab,
    Tabs,
    TabList,
    TabPanel,
    TabPanels,
    Box,
    Divider,
    AbsoluteCenter,
    Center,
    Heading,
    Text,
    Input
} from '@chakra-ui/react';
import AbilityScores from "./AbilityScores.js";
import RaceView from "./RaceView.jsx";
import SpellView from "./SpellView.jsx";

function App() {
    const [classInfo, setClassInfo] = useState([]); // State to store classInfo (class name and level)
    const [raceInfo, setRaceInfo] = useState([]);
    const [player, setPlayer] = useState(new Player("Name", "Class", 1, "Race")); // Create a player object using your Player class

    const steps = [
        { title: 'Race', description: (player.basicInfo.race).toUpperCase() },
        { title: 'Class', description: (player.basicInfo.className).toUpperCase() + ' ' + player.basicInfo.level },
        { title: 'Spells', description: '_SELECTED_' },
        { title: 'Ability Scores', description: '_SELECTED_' },
        { title: 'Equipment', description: '_SELECTED_' },
    ];

    const { activeStep, setActiveStep } = useSteps({
        index: 0,
        count: steps.length,
    });

    return (
        <Box>
            <Box position='relative' padding='10'>
                <Divider />
                <AbsoluteCenter bg='white' px='4'>
                    <Heading size='lg'>Create Your Character</Heading>
                </AbsoluteCenter>
            </Box>
            <Box display="flex" justifyContent="center">
                <SelectName player={player} setPlayer={setPlayer} />
            </Box>
            <Stepper size='lg' index={activeStep} ml={10} mr={10} mt={5} mb={5}>
                {steps.map((step, index) => (
                    <Step key={index} onClick={() => setActiveStep(index)}>
                        <StepIndicator>
                            <StepStatus
                                complete={<StepIcon />}
                                incomplete={<StepNumber />}
                                active={<StepNumber />}
                            />
                        </StepIndicator>
                        <Box flexShrink='0'>
                            <StepTitle>{step.title}</StepTitle>
                            <StepDescription>{step.description}</StepDescription>
                        </Box>
                        <StepSeparator />
                    </Step>
                ))}
            </Stepper>
            
            <Box>

                <Tabs>
                    <TabList backgroundColor='white'>
                        <Tab>Race</Tab>
                        <Tab>Class</Tab>
                        <Tab>Spells</Tab>
                        <Tab>Ability Scores</Tab>
                        <Tab>Equipment</Tab>
                        <Tab>Your Character</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <RaceView player={player} setPlayer={setPlayer} raceInfo={raceInfo} setRaceInfo={setRaceInfo} />
                        </TabPanel>
                        <TabPanel>
                            <ClassView player={player} setPlayer={setPlayer} classInfo={classInfo} setClassInfo={setClassInfo} />
                        </TabPanel>
                        <TabPanel>
                            <SpellView player={player} setPlayer={setPlayer}/>
                        </TabPanel>
                        <TabPanel>
                            <AbilityScores player={player} setPlayer={setPlayer}/>
                            {console.log(player)}
                        </TabPanel>
                        <TabPanel>
                            <p>Select Equipment is under construction</p>
                        </TabPanel>
                        <TabPanel>
                            {/* Pass player object to CharacterSheet */}
                            <CharacterSheet character={player} />
                        </TabPanel>
                    </TabPanels>
                </Tabs>

            </Box>
        </Box>
    );
}

function SelectName({ player, setPlayer }) {
    const [value, setValue] = useState('');

    // Ensure both player and player.basicInfo are defined
    if (!player || !player.basicInfo) {
        return <div>Loading...</div>; // Display a loading message if player or player.basicInfo is not yet available
    }

    const handleChange = (event) => {
        const newValue = event.target.value;
        setValue(newValue);

        // Make sure player.basicInfo exists before accessing its properties
        if (player && player.basicInfo) {
            // Update the player state when the name is changed
            const updatedPlayer = new Player(
                newValue,
                player.basicInfo.className,
                player.basicInfo.level,
                player.basicInfo.race
            );

            setPlayer(updatedPlayer);
            // Optionally update the player's basic info if the Player class has this method
            player.setName(newValue);
        } else {
            console.error('player or player.basicInfo is not properly initialized');
        }
    };

    return (
        <>
            <Box>
                <Text mb="8px">What is your Characters Name? {value}</Text>
                <Input
                    value={value}
                    onChange={handleChange}
                    placeholder="Select Name"
                    size="md"
                />
            </Box>
        </>
    );
}


export default App;
