# SIMILAR-DOCTORS-APPLICATION

Repository for SIMILAR-DOCTORS-APPLICATION

---

#github repo link: https://github.com/arman-pathan/similar-doctor-practice-fusion
Application link: http://13.52.74.16:3000/

1. Technologies used:

Frontend: React js, Bootstrap
Backend: Node js, Express js
Database: MongoDB on cloud with Mongoose driver for ORM

2. Database:

- Created my own dataset for application purpose
- Hosted on MongoDB Atlas cloud Database-as-a-service

3. Test Case assumptions:

I haven't handled case sensitive search in this application.

Use the following assumptions in test case for searching:

Enter "san jose" or "new york" for location
Enter "ortho" or "dentist" for Speciality
Enter eg. "arman" or "Neha" or "sarthak"

4. Similar doctors:

After searching for doctors on the home page, click to view full profile of any doctor.

Similar doctors will be displayed alongside with same "speciality" as the current doctor's profile being viewed.

5. Deployment and Application hosting:

AWS: Hosted my application on 2 EC2 instances

#AWS EC2 frontend public ip: http://13.52.74.16:3000/
#AWS EC2 backend public ip: http://54.193.24.133:5000/

6. Time spent:

~30 minutes for setting up database
~2 hours for application code
~15 minutes for AWS EC2 deployment

7. Scope of Improvement:

- UI could have been improved given more time
- Case sensitive search can be handled by manipulating and forcing all user input values/ strings .toLowerCase().
- Express router can be used in backend for code modularization.
  Since, this application contained only 2 APIs, I've written them in a single index.js file at backend
- Images can be added to doctor's profile using Multer or React Dropzone.
- Login and logout functionality could be added and password can be encrypted using bcrypt
- Authentication can be provided to protect APIs using passport js
- Given more time, could have made the application much better and efficient.

8. Side Note:

To run and test the application on local make changes in following files:

a) Fulldetails, SearchDoctors in frontend/components:

Change http://13.52.74.16:3000/ to http://localhost:3000/

b) Changes in index.js in backend:

Change http://54.193.24.133:5000/ to http://localhost:5000/
