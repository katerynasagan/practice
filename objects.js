function HouseKeeper(yearsOfExperience, name, hasWorkPermit, cleaningRepertoire) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function() {
        alert ("Cleaning in progress...")
    }
}
