// Constructor Function
function BellBoy (name, age, hasWorkPermit, languages) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
  this.moveSuitcase = function() {
    alert("May I take your suitcase?");
    pickUpSuitcase();
    move();
}

// Initialise Object
var bellBoy1 = new BellBoy("John", 20, true, ["English", "French"]);
var bellBoy2 = new BellBoy("Sean", 25, false, ["Portugese", "English"]);
var bellBoy3 = new BellBoy("Willian", 21, false, ["Spanish", "German", "Italian"]);
