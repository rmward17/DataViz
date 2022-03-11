# Initial variable to track game play
user_play = "y"

# While we are still playing...
while user_play == "y":

    # Ask the user how many numbers to loop through
    end = int(input("How many loops do you want?:"))
    
    # Loop through the numbers. (Be sure to cast the string into an integer.)
    for num in range(0, end+1):

        # Print each number in the range
       print(num)

    # Once complete...
    user_play = input("Continue: (y)es or (n)o? ")
    
