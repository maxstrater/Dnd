import { useState } from 'react';
import { Box, Select, Heading, HStack, Center } from '@chakra-ui/react';
import Player from './Player'; // Assuming you have a Player class

function AbilityScores({ player, setPlayer }) {
    // Define initial ability scores
    const initialAbilityScoreShop = [15, 14, 13, 12, 10, 8, "--"];

    // State to track available scores
    const [availableScores, setAvailableScores] = useState(initialAbilityScoreShop);

    // Initialize chosen ability scores with player data or defaults
    const [chosenScores, setChosenScores] = useState({
        str: null,
        dex: null,
        con: null,
        int: null,
        wis: null,
        cha: null,
    });

    // Handle score selection
    const handleSelectChange = (ability, score) => {
        const previousScore = chosenScores[ability]; // Track the previous score

        // Update chosenScores with the new selection or reset
        setChosenScores((prevScores) => ({
            ...prevScores,
            [ability]: score !== "--" ? score : "--", // If "--", reset the score to null
        }));

        // Update availableScores
        setAvailableScores((prevScores) => {
            let newScores = [...prevScores];

            // If a new score is selected (not "--"), remove it from availableScores
            if (score !== "--") {
                newScores = newScores.filter((availableScore) => availableScore !== score);
            }

            // If the previous score exists (not null), add it back to availableScores
            if (previousScore !== null) {
                newScores.push(previousScore);
            }

            return newScores;
        });

        // Optionally, update the player instance here
        if (player instanceof Player) {
            player.setAbilityScore(ability, score);
            console.log(ability, score);
            console.log(player)
        } else {
            console.error('player.setAbilityScore is not a function');
        }
    };

    return (
        <div>

            <Box display="flex" flexDirection="column" gap={4}>
                <Center>
                    <HStack>
                        {/* Render dropdowns for each ability */}
                        {Object.keys(chosenScores).map((ability, index) => (
                            <Box key={index}>
                                <Heading size="md">{ability.toUpperCase()}</Heading>
                                <Select
                                    placeholder={ability.toUpperCase()}
                                    onChange={(e) => handleSelectChange(ability, parseInt(e.target.value))}
                                    value={chosenScores[ability] || ""}
                                >
                                    {availableScores.map((score, idx) => (
                                        <option key={idx} value={score}>
                                            {score}
                                        </option>
                                    ))}
                                </Select>
                            </Box>
                        ))}
                    </HStack>
                </Center>

                {/* Display the chosen ability scores */}
                <Box mt={4}>
                    <Heading size="md">Selected Ability Scores:</Heading>
                    <ul>
                        {Object.entries(chosenScores).map(([ability, score], index) => (
                            <li key={index}>
                                {ability.toUpperCase()}: {score || "Not Selected"}
                            </li>
                        ))}
                    </ul>
                </Box>
            </Box>
        </div>
    );
}
export default AbilityScores;
