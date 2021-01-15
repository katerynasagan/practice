function HouseKeeper(yearsOfExperience, name, hasWorkPermit, skillsAbilities) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.hasWorkPermit = hasWorkPermit;
    this.skillsAbilities = skillsAbilities;
}

var houseKeeper1 = new HouseKeeper(5, "Mia", true, ["dusting", "polishing", "cleaning", "washing", "vacuuming"]);
var houseKeeper2 = new HouseKeeper(9, "Lana", true, ["ironing", "washing", "makingBed"]);
