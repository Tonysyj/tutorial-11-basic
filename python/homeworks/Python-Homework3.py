class Animal: 
    age=18
    gender="male"
    name="Tiger"

    def greeting(self):
        print("Hello, I am", Animal.name)

    def eat(self, food):
        return f"I want to eat {food}"

tiger=Animal()
person = Animal()

tiger.greeting()
print(person.eat("meat"))

class Dog(Animal):
    price="$200"
    def bark(self):
        print("My price is", Dog.price)

dog=Dog()

dog.bark()
