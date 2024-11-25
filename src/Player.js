

class Player {
  basicInfo = {
    name: "Player-Name",
    className: "Player-Class",
    level: 1,
    race: "Player-Race"
  }
  abilities = {
    str: 10,
    dex: 10,
    con: 10,
    int: 10,
    wis: 10,
    cha: 10
  }
  skills = {
    skillProficiency: [],
    skillModifiers: []
  }
  combat = {
    ac: 10,
    initiative: 10,
    speed: 10,
    hp: 10,
    hitDice: 10
  }
  spells = {
    spellcastingAbility: "cha",
    spellSaveDc: 10,
    spellAttackBonus: 10,
    spellSlots: [],
    spellList: []
  }

  constructor(name, classInfo, level, race) {
    this.basicInfo.name = name;
    this.basicInfo.className = classInfo;
    this.basicInfo.level = level;
    this.basicInfo.race = race;
    this.abilities = {
      str: null,
      dex: null,
      con: null,
      int: null,
      wis: null,
      cha: null,
    };
  }
  setName(name){
    this.basicInfo.name = name;
  }
  setBasicInfo(name, classInfo, level, race) {
    this.basicInfo.name = name;
    this.basicInfo.className = classInfo;
    this.basicInfo.level = level;
    this.basicInfo.race = race;
  }

  // Method to set an individual ability score
  setAbilityScore(ability, score) {
    if (this.abilities.hasOwnProperty(ability)) {
      this.abilities[ability] = score;
    } else {
      console.error(`Ability ${ability} not found`);
    }
  }

  // Optionally, you can have a method to set multiple abilities at once
  setAbilities(abilities) {
    this.abilities = { ...this.abilities, ...abilities };
  }

  getAbilityScores(){
    return this.abilities;
  }

  setSkills(skillProficiency, skillModifiers) {
    this.skills.skillProficiency = skillProficiency;
    this.skills.skillModifiers = skillModifiers;
  }

  setCombat(combat) {
    this.combat.ac = combat[0];
    this.combat.initiative = combat[1];
    this.combat.speed = combat[2];
    this.combat.hp = combat[3];
    this.combat.hitDice = combat[4];
  }

  setSpells(spellcastingAbility, spellSaveDc, spellAttackBonus, spellSlots) {
    this.spells.spellcastingAbility = spellcastingAbility;
    this.spells.spellSaveDc = spellSaveDc;
    this.spells.spellAttackBonus = spellAttackBonus;
    this.spells.spellSlots = spellSlots;
  }
}


export default Player