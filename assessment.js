// **Ancestral Stories:** In many African cultures, the art of storytelling is passed
// down from generation to generation. Imagine you're creating an application that
// records these oral stories and translates them into different languages. The
// stories vary by length, moral lessons, and the age group they are intended for.
// Think about how you would model `Story`, `StoryTeller`, and `Translator`
// objects, and how inheritance might come into play if there are different types of
// stories or storytellers.
class Story {
  constructor(title, description, moral_lesson, ageGroup) {
  this.title = title;
  this.text = description;
  this.moral = moral_lesson;
  this.ageGroup = ageGroup;
  }
  }
  class StoryTeller {
  constructor(name, title, language) {
  this.name = name;
  this.title = title;
  this.language = language;
  }
  tellStories () {
  return `${this.name} is telling ${this.title} in ${this.language}`;
  }
  };
  let story= new StoryTeller("Grace Ogot","Tekayo","Luo")
  console.log(story.tellStories());
  class Translator extends StoryTeller {
  constructor(name, title, language,targetLanguage) {
  super()
  this.name= name;
  this.title=title;
  this.language=language;
  this.targetLanguage= targetLanguage;
  }
  tellStory(){
  return ` ${this.name} translates ${this.title } from ${this.language} to ${this.targetLanguage} `
  }
  }
const translate= new Translator ("Paula Karimi","Tekayo","Luo","Kiswahili")
console.log(translate.tellStory()) ;
// class Persons extends  StoryTeller(){


// }    

// # 2. **African Cuisine:** You're creating a recipe app specifically for African cuisine.
// # The app needs to handle recipes from different African countries, each with its
// # unique ingredients, preparation time, cooking method, and nutritional
// # information. Consider creating a `Recipe` class, and think about how you might
// # create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
// # `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
// # methods.
// class Recipe{
//     constructor()
// }

class Recipe {
    constructor(name, country, unique_ingredients, preparation_time, cooking_method, nutritional_value) {
      this.name = name;
      this.country = country;
      this.unique_ingredients = unique_ingredients;
      this.preparation_time = preparation_time;
      this.cooking_method = cooking_method;
      this.nutritional_value = nutritional_value;
    }
  }
   class MoroccanRecipe extends Recipe {
    constructor(name, country, unique_ingredients, preparation_time, cooking_method, nutritional_value) {
      super(name, country, unique_ingredients, preparation_time, cooking_method, nutritional_value);
    }
     cook() {
      return `For ${this.name} in ${this.country}, cook the meal with ${this.unique_ingredients} for ${this.preparation_time} by ${this.cooking_method} to gain more ${this.nutritional_value}`;
    }
  }
   class EthiopianRecipe extends Recipe {
    constructor(name, country, unique_ingredients, preparation_time, cooking_method, nutritional_value) {
      super(name, country, unique_ingredients, preparation_time, cooking_method, nutritional_value);
    }
     cook() {
      return `For ${this.name} in ${this.country}, cook the meal with ${this.unique_ingredients} for ${this.preparation_time} by ${this.cooking_method} to gain more ${this.nutritional_value}`;
    }
  }
   class NigerianRecipe extends Recipe {
    constructor(name, country, unique_ingredients, preparation_time, cooking_method, nutritional_value) {
      super(name, country, unique_ingredients, preparation_time, cooking_method, nutritional_value);
    }
     cook() {
      return `For ${this.name} in ${this.country}, cook the meal with ${this.unique_ingredients} for ${this.preparation_time} by ${this.cooking_method} to gain more ${this.nutritional_value}`;
    }
  }
   const moroccan = new MoroccanRecipe("Wheat", "Morocco", "vinegar", "30 minutes", "grilling", "cumin");
  const ethiopian = new EthiopianRecipe("chicken_breasts", "Ethiopia", "white wine", "45 minutes", "stewing", "doro wat");
  const nigerian = new NigerianRecipe("Jollof", "Nigeria", "pepper", "3 hours", "stirring", "proteins");
   console.log(nigerian.cook());
  console.log(moroccan.cook());
  console.log(ethiopian.cook());

//   3. **Wildlife Preservation:** You're a wildlife conservationist working on a
// program to track different species in a national park. Each species has its own
// characteristics and behaviors, such as its diet, typical lifespan, migration
// patterns, etc. Some species might be predators, others prey. You'll need to

// create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
// these classes might relate to each other through inheritance.

// class Species{
//   constructor(name, diet, lifespan, migration_patterns){
//   this.name = name
//   this.diet = diet
//   this.lifespan = lifespan
//   this.migration_patterns = migration_patterns
//   }
//   get_species_info(){
//     return (`${this.name} feeds on ${this.diet}, it has a lifespan of ${this.lifespan} and has ${this.migration_patterns} migrations`)
//   }
//   }
//   class Predator extends Species{
//   constructor(name, diet, lifespan, migration_patterns,hunting_method ){
//     super(name, diet, lifespan, migration_patterns)
//     this.hunting_method = hunting_method
//   }
//   get_species_info(){
//     return super.get_species_info();
//   }
//   get_defense_mechanism(){
//     return(`${this.name} hunting method: ${this.hunting_method}`);
//   }
//   }
//   const animal1 = new Predator("Cheetah", "meat", "20yrs", "East to West", "spot and pounce")
//   console.log(animal1.get_species_info());
//   console.log(animal1.get_defense_mechanism());
//   class Prey extends Species {
//   constructor(name, diet, lifespan, migration_patterns, defense_mechanism) {
//     super(name, diet, lifespan, migration_patterns);
//     this.defense_mechanism = defense_mechanism;
//   }
//   get_species_info() {
//     console.log(super.get_species_info());
//   }
//   get_defense_mechanism(){
//     console.log(`${this.name} Defense Mechanism: ${this.defense_mechanism}`);
//   }
//   }
//   const animal2 = new Prey("Antelope", "grass", "20 years", "seasonal", "lying on the ground");
//   animal2.get_species_info();
//   animal2.get_defense_mechanism();




  class Specie{
    constructor (name, classification, diet, averagelifespan, populationsize ,appearance){
      this.name= name;
      this.classification=classification;
      this.diet=diet;
      this.averagelifespan=averagelifespan;
      this.populationsize=populationsize;
      this.appearance=appearance;
      this.aggressionLevel=aggressionLevel;
      this.strengthLevel= strengthLevel;
    }
    specieInteraction(predator, prey) {
      if (predator.strengthLevel> prey.strengthLevel) {
        console.log(`${predator.name} was able to catch ${prey.name}.`);
      } else {
        console.log(`${prey.name} was able to escape from ${predator.name}.`);
      }
    }
  }
 class Species {
   constructor(diet, typicalLifespan, migrationPatterns) {
     this.diet = diet;
     this.typicalLifespan = typicalLifespan;
     this.migrationPatterns = migrationPatterns;
   }
    typeOfAnimal() {
     if (this.diet === "herbivorous") {
       console.log("This animal is not a danger to other animals.");
     } else if (this.diet === "omnivorous") {
       console.log("This animal feeds on plants but also feeds on some animals.");
     } else {
       console.log("This animal is very dangerous to other animals and does not eat plants.");
     }
   }
 }
  class Predator extends Species {
   constructor(diet, typicalLifespan, migrationPatterns, typeOfTeeth, claws, venom, name) {
     super(diet, typicalLifespan, migrationPatterns);
     this.typeOfTeeth = typeOfTeeth;
     this.claws = claws;
     this.venom = venom;
     this.name = name;
   }
    fastKillers() {
     if (this.venom) {
       console.log(`The bite of a ${this.name} can be lethal.`);
     } else {
       console.log(`The bite of a ${this.name} is not lethal.`);
     }
   }
    methodOfKilling() {
     if (this.typeOfTeeth.includes("carnassial teeth")) {
       console.log(`A ${this.name} kills by slicing up their prey.`);
     } else {
       console.log("This predator cannot shear their prey's meat after attacks.");
     }
   }
 }
  class Prey extends Species {
   constructor(diet, typicalLifespan, migrationPatterns, defenseMechanisms, name) {
     super(diet, typicalLifespan, migrationPatterns);
     this.defenseMechanisms = defenseMechanisms;
     this.name = name;
   }
    addDefenseMechanism(defenseMechanism) {
     this.defenseMechanisms.push(defenseMechanism);
   }
 }
  const pred = new Species("grass", "40years", "easttowest");
 pred.typeOfAnimal();
  const deer = new Prey('herbivore', 10, 'seasonal', ['camouflage'], 'Deer');
 console.log(deer.defenseMechanisms);
  const lion = new Predator('carnivore', 15, 'non-migratory', ['carnassial teeth'], 'sharp claws', false, 'Lion');
 lion.methodOfKilling();
 lion.fastKillers();
  deer.addDefenseMechanism('speed');
 console.log(deer.defenseMechanisms);


//  4.**African Music Festival:** You're in charge of organizing a Pan-African music
// festival. Many artists from different countries, each with their own musical style
// and instruments are scheduled to perform. You need to write a program to
// manage the festival lineup, schedule, and stage arrangements. Think about how
// you might model the `Artist`, `Performance`, and `Stage` classes, and consider
// how you might use inheritance if there are different types of performances or stages.
class Artist {
  constructor(name, country, musicType, instruments) {
    this.name = name;
    this.country = country;
    this.musicType = musicType;
    this.instruments = instruments;
  }
   artistDetail() {
    console.log(`name: ${this.name}, country: ${this.country}, musicType: ${this.musicType}, instruments: ${this.instruments.join(', ')}`);
  }
}
 class Performance extends Artist {
  constructor(name, country, musicType, instruments, stageTime) {
    super(name, country, musicType, instruments);
    this.stageTime = stageTime;
  }
   scheduling() {
    console.log(`name: ${this.name}, musicType: ${this.musicType}, time: ${this.stageTime}`);
  }
   playInstrument(instrument) {
    if (this.instruments.includes(instrument)) {
      console.log(`${this.name} is playing ${instrument}`);
    } else {
      console.log(`${this.name} is not playing ${instrument}`);
    }
  }
}
 class Stage extends Artist {
  constructor(name, country, musicType, instruments, capacity, location) {
    super(name, country, musicType, instruments);
    this.capacity = capacity;
    this.location = location;
  }
   performance() {
    console.log(`name: ${this.name}, country: ${this.country}, musicType: ${this.musicType}, capacity: ${this.capacity}, place: ${this.location}`);
  }
}
 const artist = new Artist("jayz", "Canada", "hiphop", ["guitar", "piano"]);
artist.artistDetail();
 const perform = new Performance("sautisol", "Kenya", "bongo", ["guitar", "piano"], "2 hours");
perform.scheduling();
perform.playInstrument("guitar");
 const stage = new Stage("Bridget blue", "Kenya", "gospel", ["piano", "harp", "violin"], 100, "Nakuru");
stage.performance();
 class FestivalLineup extends Artist {
  constructor(country, name, instruments) {
    super(country, name, instruments);
  }
}


const artist1 = new Artist("Nigeria", "Fela Kuti", ["guitar", "drums"]);
const artist2 = new Artist("Ghana", "Kofi Annan", ["piano", "violin"]);
const artist3 = new Artist("Kenya", "Wangari Maathai", ["flute", "harp"]);
 const performance1 = new Performance(artist1, "Friday, 10am", "The Fela Kuti Band");
const performance2 = new Performance(artist2, "Saturday, 2pm", "The Kofi Annan Quartet");
const performance3 = new Performance(artist3, "Sunday, 4pm", "The Wangari Maathai Trio");
 const stage1 = new Stage("Open-air stage", "The Great Lawn", 10000);
const stage2 = new Stage("Indoor stage", "The Concert Hall", 5000);
 console.log("The festival lineup is:");

//  5. Create a class called Product with attributes for name, price, and quantity.
// Implement a method to calculate the total value of the product (price * quantity).
// Create multiple objects of the Product class and calculate their total values.


// class Product{
// constructor(name,price,quantity){
//   this.name=name
//   this.price=price
//   this.quantity=quantity
// }

// gettotal(){
//   return value
// }
// }

// const product1= new Product("mangoes","200","20")
// const product2= new Product("mangoe2","200","20")
// const product3= new Product("mangoes","200","20")
// const allproducts=[product1,product2,product3]
// let value=0
// for(const i of allproducts){
//  value++
// }
// console.log(value)
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
 
  calculateTotalValue() {
    if (this.quantity > 0) {
      return this.price * this.quantity;
    } else {
      return 0;
    }
  }
}
 const products = [
  new Product("pen", 10.5, 100),
  new Product("Book", 0.5, 150),
  new Product("sharpener", 0.2, 120)
];
 let totalValue = 0;
 for (let i = 0; i < products.length; i++) {
  if (products[i].quantity > 0) {
    totalValue += products[i].calculateTotalValue();
  }
}
 console.log("Total value of all products:", totalValue);





// 6. Implement a class called Student with attributes for name, age, and grades (a
//   list of integers). Include methods to calculate the average grade, display the
//   student information, and determine if the student has passed (average grade >=
//   60). Create objects for the Student class and demonstrate the usage of these
//   methods.
class Student {
  constructor(name, age, grades) {
    this.name = name;
    this.age = age;
    this.grades = grades;
  }
  calculateAverageGrade() {
    const sum = this.grades.reduce((total, grade) => total + grade, 0);
    return sum / this.grades.length;
  }
  hasPassed() {
    const averageGrade = this.calculateAverageGrade();
    return averageGrade >= 60 && this.grades.length >= 3;
  }
  displayHighestGrade() {
    const highestGrade = Math.max(...this.grades);
    console.log("Highest Grade:", highestGrade);
  }
}
const students = [
  new Student("Mercy Jebichi", 18, [80, 75, 90]),
  new Student("Feith Chepwogen", 19, [70, 85, 65]),
  new Student("Alice Ekeno", 20, [90, 80, 95])
];
for (const student of students) {
  console.log("Student information:");
  console.log("Name:", student.name);
  console.log("Age:", student.age);
  console.log("Grades:", student.grades);
  const averageGrade = student.calculateAverageGrade();
  console.log("Average Grade:", averageGrade);
  const passingStatus = student.hasPassed() ? "Passed" : "Failed";
  console.log("Passing Status:", passingStatus);
  student.displayHighestGrade();
  console.log();
}
