#1. **Ancestral Stories:** In many African cultures, the art of storytelling is passed
# down from generation to generation. Imagine you're creating an application that
# records these oral stories and translates them into different languages. The
# stories vary by length, moral lessons, and the age group they are intended for.
# Think about how you would model `Story`, `StoryTeller`, and `Translator`
# objects, and how inheritance might come into play if there are different types of
# stories or storytellers.
class Stories:
   def __init__(self,title,moral_value,length,language):
       self.title=title
       self.moral_value=moral_value
       self.length=length
       self.language=language


   def getStory(self):
       return f"The story {self.title}  teaches a moral of {self.moral_value}  is of length {self.length}.The language used in this story is {self.language}" 


story= Stories ("Born A crime","Do not give up",12,"English")
print(story.getStory())




class StoryTeller:
   def __init__(self,name,language, title):
       self.name =name
       self.title=title
       self.language=language
   def tellStories(self):
       return f"{self.name} is telling {self.title} in {self.language}"


stories=StoryTeller("Grace Ogot","Luo","Tekayo")
print(stories.tellStories()) 


class Translator(StoryTeller):
   def __init__(self,targetLanguage,name, title,language):
       self.name=name
       self.title=title
       self.language=language
       self.targetLanguage=targetLanguage


   def tellStory(self):
       return f"{self.name} translates {self.title} from {self.language} to {self.targetLanguage}" 


translate=Translator("Luo" ,"Paula Karimi","Tekayo","Kiswahili") 
print(translate.tellStory())       


# 2. **African Cuisine:** You're creating a recipe app specifically for African cuisine.
# The app needs to handle recipes from different African countries, each with its
# unique ingredients, preparation time, cooking method, and nutritional
# information. Consider creating a `Recipe` class, and think about how you might
# create subclasses for different types of recipes (e.g., `MoroccanRecipe`,
# `EthiopianRecipe`, `NigerianRecipe`), each with their own unique properties and
# methods.
class Recipe:
     
     def __init__(self,name,country,unique_ingredients,preparation_time,cooking_method,nutritional_value) :
         
         self.name=name
         self.country=country
         self.unique_ingredients=unique_ingredients
         self.preparation_time=preparation_time
         self.cooking_method=cooking_method
         self.nutritional_value=nutritional_value

class MoroccanRecipe(Recipe):

    def __init__(self, name, country, unique_ingredients, preparation_time, cooking_method, nutritional_value):

        super().__init__(name, country, unique_ingredients, preparation_time, cooking_method, nutritional_value)


    def cook(self):
        
        return f"For {self.name} in {self.country}  cook the meal with {self.unique_ingredients} for {self.preparation_time} by {self.cooking_method} to gain  more {self.nutritional_value}"
    


class EthopianRecipe(Recipe):
    def __init__(self, name, country, unique_ingredients, preparation_time, cooking_method, nutritional_value):

        super().__init__(name, country, unique_ingredients, preparation_time, cooking_method, nutritional_value)

    def cook(self):

        return f"For {self.name} in {self.country}  cook the meal with {self.unique_ingredients} for {self.preparation_time} by {self.cooking_method} to gain  more {self.nutritional_value}"
    


class  NigerianRecipe(Recipe):

    def __init__(self, name, country, unique_ingredients, preparation_time, cooking_method, nutritional_value):

        super().__init__(name, country, unique_ingredients, preparation_time, cooking_method, nutritional_value)

    def cook(self):

        return f"For {self.name} in {self.country}  cook the meal with {self.unique_ingredients} for {self.preparation_time} by {self.cooking_method} to gain  more {self.nutritional_value}"
    
morrocan= MoroccanRecipe("Wheat","Morrocco","vineger","30 minutes","grilling","cumin")

ethopian= EthopianRecipe("chicken_breasts","Ethopia","white wine","45 minutes","stewing","doro wat")

nigerian=NigerianRecipe("Jollof","Nigeria","pepper","3hours","stiring","proteins")


print(nigerian.cook())

print(morrocan.cook())

print(ethopian.cook())

# 3. **Wildlife Preservation:** You're a wildlife conservationist working on a
# program to track different species in a national park. Each species has its own
# characteristics and behaviors, such as its diet, typical lifespan, migration
# patterns, etc. Some species might be predators, others prey. You'll need to

# create classes to model `Species`, `Predator`, `Prey`, etc., and think about how
# these classes might relate to each other through inheritance.

# class Species :
#     def__init__(self ,name,diet,typical_lifespan,migration_patterns):
#     self.name=name
#     self.diet=diet
#     self.typical_lifespan=lifespan
#     self.migration_pattern=migration_pattern

# def getSpecies(self)

class Species:


    def __init__(self, name, diet, lifespan, migration_patterns):
        self.name = name
        self.diet = diet
        self.lifespan = lifespan
        self.migration_patterns = migration_patterns
    def species_info(self):
        return (f"{self.name} feeds on{self.diet}, it has a lifespan of {self.lifespan} and migrates {self.migration_patterns}")
class Predator (Species):
    def __init__(self, name, diet, lifespan, migration_patterns, hunting_method):
        super().__init__(name, diet, lifespan, migration_patterns)
        self.hunting_method = hunting_method
    def species_info(self):
        return super().species_info()
animal1 = Predator("Cheetah", "meat", "30yrs", "North to South", "spot and stalk")
print(animal1.species_info())
class Prey(Species):
    def __init__(self, name, diet, lifespan, migration_patterns, defense_mechanism):
        super().__init__(name, diet, lifespan, migration_patterns)
        self.defense_mechanism = defense_mechanism
    def species_info(self):
        return super().species_info()
animal2 = Prey("Antellope", "grass", "20yrs", "seasonal", "lying flat on ground")
print(animal2.species_info())


# 4.**African Music Festival:** You're in charge of organizing a Pan-African music
# festival. Many artists from different countries, each with their own musical style
# and instruments are scheduled to perform. You need to write a program to
# manage the festival lineup, schedule, and stage arrangements. Think about how
# you might model the `Artist`, `Performance`, and `Stage` classes, and consider
# how you might use inheritance if there are different types of performances or stages.
class Artist:
   def __init__(self, name, country, music_type, instruments):
       self.name = name
       self.country = country
       self.music_type = music_type
       self.instruments = instruments
   def artist_detail(self):
       print(f"name: {self.name}, country: {self.country}, musicType: {self.music_type}, instruments: {', '.join(self.instruments)}")




class Performance(Artist):
   def __init__(self, name, country, music_type, instruments, stage_time):
       super().__init__(name, country, music_type, instruments)
       self.stage_time = stage_time
   def scheduling(self):
       print(f"name: {self.name}, musicType: {self.music_type}, time: {self.stage_time}")
   def play_instrument(self, instrument):
       if instrument in self.instruments:
           print(f"{self.name} is playing {instrument}")
       else:
           print(f"{self.name} is not playing {instrument}")

class Stage(Artist):
   def __init__(self, name, country, music_type, instruments, capacity, location):
       super().__init__(name, country, music_type, instruments)
       self.capacity = capacity
       self.location = location
   def performance(self):
       print(f"name: {self.name}, country: {self.country}, musicType: {self.music_type}, capacity: {self.capacity}, place: {self.location}")

artist = Artist("jayz", "Canada", "hiphop", instruments=["guitar", "piano"])
artist.artist_detail()
perform = Performance("sautisol", "Kenya", "bongo", instruments=["guitar", "piano"], stage_time="2 hours")
perform.scheduling()
perform.play_instrument("guitar")
stage = Stage("Bridget blue", "Kenya", "gospel", instruments=["piano", "harp", "violin"], capacity=100, location="Nakuru")
stage.performance()










class Artist:
   def __init__(self, country, name, instruments):
       self.country = country
       self.name = name
       self.instruments = instruments
class Performance(Artist):
   def __init__(self, festival_lineup, schedule, band):
       super().__init__(festival_lineup.country, festival_lineup.name, festival_lineup.instruments)
       self.festival_lineup = festival_lineup
       self.schedule = schedule
       self.band = band
class Stage:
   def __init__(self, stage_arrangements, place, audience):
       self.stage_arrangements = stage_arrangements
       self.place = place
       self.audience = audience
artist1 = Artist("Nigeria", "Fela Kuti", ["guitar", "drums"])
artist2 = Artist("Ghana", "Kofi Annan", ["piano", "violin"])
artist3 = Artist("Kenya", "Wangari Maathai", ["flute", "harp"])
performance1 = Performance(artist1, "Friday, 10am", "The Fela Kuti Band")
performance2 = Performance(artist2, "Saturday, 2pm", "The Kofi Annan Quartet")
performance3 = Performance(artist3, "Sunday, 4pm", "The Wangari Maathai Trio")
stage1 = Stage("Open-air stage", "The Great Lawn", 10000)
stage2 = Stage("Indoor stage", "The Concert Hall", 5000)
# Print the festival lineup
print("The festival lineup is:")
for performance in [performance1, performance2, performance3]:
   print(performance.festival_lineup.__dict__)
# Print the schedule
print("\nThe schedule is:")
for performance in [performance1, performance2, performance3]:
   print(performance.schedule)
# Print the stages
print("The stages are:")
for stage in [stage1, stage2]:
   print(stage.stage_arrangements)

# 5. Create a class called Product with attributes for name, price, and quantity.
# Implement a method to calculate the total value of the product (price * quantity).
# Create multiple objects of the Product class and calculate their total values.
class Product:
    def __init__(self,name,price,quantity) :
self.name=name
self.price=price
self.quantity=quantity
def getTotalValue(self):
return (float)(self.price*self.quantity)



product1=Product("Mango",20,22)
print(product1.getTotalValue())

    


# 6. Implement a class called Student with attributes for name, age, and grades (a
# list of integers). Include methods to calculate the average grade, display the
# student information, and determine if the student has passed (average grade >=
# 60). Create objects for the Student class and demonstrate the usage of these
# methods.
class Student:

   def __init__(self, name, age, grades):
       self.name = name
       self.age = age
       self.grades = grades
   def cal_average_grade(self):
       if len(self.grades) == 0:
           return 0
       total_sum = sum(self.grades)
       return total_sum / len(self.grades)
   def student_who_passed(self):
       average_grade = self.cal_average_grade()
       return average_grade >= 60
   def highest_grade(self):
       highest_grade = max(self.grades)
       print("Highest Grade:", highest_grade)
students = [
   Student("Mercy Jebichi", 18, [80, 75, 90]),
   Student("Feith Chepwogen", 19, [70, 85, 65]),
   Student("Alice Ekeno", 20, [90, 80, 95])
]
for student in students:
   print("Name:", student.name)
   print("Age:", student.age)
   print("Grades:", student.grades)
   average_grade = student.cal_average_grade()
   print("Average Grade:", average_grade)
   passing_status = "Passed" if student.student_who_passed() else "Failed"
   print("Passing Status:", passing_status)
   print()

