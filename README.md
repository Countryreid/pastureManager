# Overview

{Important! Do not say in this section that this is college assignment. Talk about what you are trying to accomplish as a software engineer to further your learning.}I am trying to build an app that helps farmers to manage pastures based on the animals they have. The database is used to store the general numbers for all these animals and then be able to add new one to the individuals farm.

The program is a mobile app build in react native. The database is firebase. This is a cloud database in hopes that all will be able to use it when i add the program. 





{Provide a link to your YouTube demonstration. It should be a 4-5 minute demo of the software running, a walkthrough of the code, and a view of the cloud database.}


[Software Demo Video](https://youtu.be/n-Grvi82XWo)
[live app demo](https://youtu.be/eM1p_dSzG2U)

# Cloud Database

I am using a firbase database. It is actually a firestore wich is a simpler version that is serverless. This allows it to directly connect to the project without creating an API

The database now has a collection called animals. This holds documents about the general animal's data. The next step will be to create individual farms and then each farm will have a collection of animals that are on the farm and their sizeing data. 


# Development Environment


Firestore/firebase documentaion
Chat GPT was a teacher. I used it to understand how to think through the logic. 
I used many teachers to help understand how a database is connected. 

The program is written in Javascript in React JS.
Node was used to run react. 

# Useful Websites

{Make a list of websites that you found helpful in this project}

- [firebase documentation](https://firebase.google.com/docs/firestore/quickstart)
- [firestore tutorial](https://firebase.google.com/docs/firestore)

# Future Work

- Add button to add new animal and create new farm. 
- Add a way to change the animal to a previously created animal. 
- Fix the output to actually work through all the animals. 