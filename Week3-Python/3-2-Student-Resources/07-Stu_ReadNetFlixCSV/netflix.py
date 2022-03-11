# Modules
#import os
import csv

# Prompt user for video lookup
video = input("What show or movie are you looking for? ")
path = r'C:\Users\wardr\OneDrive\Desktop\DataAnalyticsBootcamp\Class_Resources\DataViz\Week3-Python\3-2-Student-Resources\07-Stu_ReadNetFlixCSV\netflix_ratings.csv'
# Set path for file
#file_to_load = os.path("netflix_ratings.csv")
# print(file_to_load)
# Open the CSV
with open(path,'r') as csvfile:
    csvreader = csv.reader(csvfile, delimiter=",")

    # Loop through looking for the video
    for row in csvreader:
        if row[0] == video:
            print(row[0] + " is rated " + row[1] + " with a rating of " + row[5])
    else:
        print("Sorry about this, we don't seem to have what you are looking for!")



