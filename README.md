This repository Node.js application built with Express server basic file handling functionalities using HTTP methods (`POST` and `GET`).

Create File: HTTP `POST` endpoint to create a new file with timestamped filename.
Get Files: HTTP `GET` endpoint to retrieve a list of all created files.

NPM Start to run the port

post/file : Create a new file.
put/file : Retrieve all files

Example Requests and Responses

POST Request to Create a File

URL: http://localhost:8000/file
Method: POST

  {
      "someData": "example"
  }
  
Response:
  {
      "message": "File created successfully.",
      "fileName": "2024-07-18T12-00-00.000Z.txt"
  }
  
GET Request to Fetch Files

URL: http://localhost:8000/file
Method : GET
Response:
  {
      "files": [
          {
              "fileName": "2024-07-18T12-00-00.000Z.txt",
              "fileContent": "Wed Jul 18 2024 12:00:00 GMT+0000 (Coordinated Universal Time)"
          }
      ]
  }
