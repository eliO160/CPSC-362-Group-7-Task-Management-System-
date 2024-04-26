# CPSC-362 Group 7 Task Management System
**Team members:** Emil Shahbazov, Aaron Tang, Brian Tang, Jair De Orta, Elizabeth Ovieda


## Project Summary:
This simple task manager enables a user to create a task with a description and due date, and then track the task's progress between three columns: To Do, Work in Progress, and Completed. 

The user can update any task field after it is created and drop or delete a task. The fourth column, Dropped, allows the user to move a task off the To Do or Work in Progress columns, but still see the task information if needed. 

The frontend code is powered by HTML and backend is _tk_. 

## Requirements:
Follow these steps to install the necessary dependencies:
_tk_ 

	
***To run the program:***

Right-click the _front.html_ file name in your chosen IDE. 

Then left-click on the _"Open with Live Server"_ option from the drop-down menu. 
![image](https://github.com/eliO160/CPSC-362-Group-7-Task-Management-System-/assets/142848584/73346c07-3d2b-4b05-86ba-012ab86d3cdc)

## Step-by-Step Guide:

Full Video Tutorial: _tk youtube link (To be completed after the backend code is done, the vid needs to show front and back end code, as well as functionality of app)_

**Add a New Task**

Step 1: Add Task name

Type task name into the field and click "Add Task to 'To Do'" button.

![image](https://github.com/eliO160/CPSC-362-Group-7-Task-Management-System-/assets/142848584/6309dad2-c6b1-4c31-8160-60b809f62146)

Step 2: Add description


![image](https://github.com/eliO160/CPSC-362-Group-7-Task-Management-System-/assets/142848584/5500818f-bd13-4714-a157-3173a4796e3c)



Step 3: Add due date


![image](https://github.com/eliO160/CPSC-362-Group-7-Task-Management-System-/assets/142848584/c1018144-63de-4e9d-82ce-0651da5fde65)


The new task automatically populates in the To Do column. 

The following buttons also populate under the task name. These buttons allow the user to view and edit task details.


![image](https://github.com/eliO160/CPSC-362-Group-7-Task-Management-System-/assets/142848584/bc8fdcef-f02f-43b2-b991-78c6760f3237)



**View button funtionalities**

_View Description and View Due Date:_ View the description and due date.


_View time:_ The user can see when the task was first added.


 ![image](https://github.com/eliO160/CPSC-362-Group-7-Task-Management-System-/assets/142848584/02f0af5c-5e84-4562-920c-77a314e74aa9)


**Edit button funtionalities**


_Edit Description and Edit Due Date:_ Click on these buttons to make updates to the description or due date


**Update a Task:**


A new task is added to the To Do column. To move it to the next column, Work in Progress, click on the "Move to WIP" button. This will move the task to the Work in Progress column. 

Once a task is in the Work in Progress column, select the "Move to Completed" button to move it to the Completed column. 


![image](https://github.com/eliO160/CPSC-362-Group-7-Task-Management-System-/assets/142848584/be71ae12-f8a0-49aa-aaf6-41cdc68aab71)



**Delete or Drop a Task**

To delete a task, select the "Delete Task" button. 

To remove a task from the To Do or Work in Progress column, but save the task contents and continue to view it, select the red "Drop" button. The user cannot drop a task after it has been moved to Completed, but they can delete the task if they no longer wish to see it. 


## Design Flowchart:

This flowchart illustrates the basic functions of the application:   

![Flowchart](https://github.com/eliO160/CPSC-362-Group-7-Task-Management-System-/blob/main/Updated%20final.drawio.svg)

## Development History:
***SCRUM updates***

2/16
- Set up group 7 discord and text chain
- completed preliminary flowchart

2/23 - 4/18
- FRONTEND TEAM : Jair, Emil, and Elizabeth
  	- v1: retired, developed using REACT with Javascript
  	- v2: final, developed using HTML and run a web browser
     
- BACKEND TEAM: Brian and Aaron

Backend Development:

We created an index.js file that utilizes Express, Node, and MongoDB libaries in order to build the backend for this Kanban project. 

We defined a taskSchema to display the name, description, due date, and status for user entries. Additionally, we set up GET and POST routing requests in order to send data to the backend, save it, and then be able to retrieve the information from storage and render it onto the frontend. 

We also made adjustments to the app.js file, where we implemented functions to be able to fetch data requests and send responses to UI of the web application. 

![image](https://imgur.com/a/Wce59DH)
![image](https://imgur.com/a/VSbgtNZ)

      
