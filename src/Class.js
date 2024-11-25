
class PlayerClass {
    constructor(className, level) {
        this.className = className;
        this.level = level;
    }

    async getPlayerClass() {
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        try {
            const response = await fetch("https://www.dnd5eapi.co/api/classes/" + this.className, requestOptions);
            const result = await response.json();

            const parsedInfo = {
                name: result.name,  // Class name
                hit_die: result.hit_die,  // Hit dice for the class

                // Parsing proficiencies
                proficiencies: result.proficiencies.map(p => p.name).join(', '),

                // Parsing proficiency choices
                proficiency_choices: result.proficiency_choices.map(choice => ({
                    description: choice.desc,
                    choose: choice.choose,
                    options: choice.from.options.map(option => option.item ? option.item.name : option.choice.desc).join(', ')
                })),

                // Parsing saving throws
                saving_throws: result.saving_throws.map(st => st.name).join(', '),

                // Parsing starting equipment
                starting_equipment: result.starting_equipment.map(equip => ({
                    name: equip.equipment.name,
                    quantity: equip.quantity
                })),

                // Parsing starting equipment options
                starting_equipment_options: result.starting_equipment_options.map(option => ({
                    description: option.desc,
                    choose: option.choose,
                    options: option.from.options.map(opt => opt.of ? opt.of.name : opt.choice.desc).join(', ')
                })),

                // Parsing class levels URL
                class_levels: result.class_levels,

                // Parsing multi-classing prerequisites and proficiencies
                multi_classing: {
                    prerequisites: result.multi_classing.prerequisites.map(prereq => ({
                        ability_score: prereq.ability_score.name,
                        minimum_score: prereq.minimum_score
                    })),
                    proficiencies: result.multi_classing.proficiencies.map(p => p.name).join(', ')
                },

                // Parsing subclasses
                subclasses: result.subclasses.map(subclass => subclass.name).join(', '),

                // URL
                url: result.url
            };
            console.log(parsedInfo)
            return parsedInfo;  // Return the parsed class info

        } catch (error) {
            console.error(error);
            throw new Error('Failed to fetch class info');
        }
    }
}

export default PlayerClass;




