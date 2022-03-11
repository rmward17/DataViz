
# Create a dictionary to store the following:
  # Your pet's name
  # Your pet's age
  # A list of a few of your pet's hobbies
  # A dictionary of a few times you wake up during the week
pet_dict = {'name': 'spot', 'age': 1, 'hobbies': ["eating", "sleeping", "playing"], "wakeup_times": {'Monday': '7am', 'Tuesday':'6:30am', 'Wednesday':'6am'}}
# Print out the following:
  # Your pet's name and age.
print(pet_dict['name'] , ":", pet_dict['age'])
  # How many hobbies your pet has.
print(len(pet_dict['hobbies']))
  # What your pet's favorite hobby is
print("My pet likes", pet_dict['hobbies'][0],".")
  # What time your pet wakes on one of the days of the week.
