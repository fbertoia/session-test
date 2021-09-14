# Models

employees :
  name : str - lim 256 chars
  surname : str - lim 256 chars
  phone : str - lim 256 chars
  email : str - lim 256 chars (email)
  projects : []
  tasks : []



projects :
  name : str
  beginning_date : date
  end_date : date
  employees : []



tasks :
  title : str
  description : str
  status : [DONE, TODO]
  projects : id
  employees : id


# Routes

#### Employees
/api/employees
  GET
  POST
/api/employees/:id
  GET
  PATCH
  DELETE
/api/employees/:id/projects
  GET
/api/employees/:id/tasks/:id
  GET
  PATCH
  DELETE

#### Projects
/api/projects
  GET
  POST
/api/projects/:id
  GET
  PATCH
  DELETE

#### Employees of a project
/api/projects/:id/employees
  GET
  POST : employee_id : id
  DELETE : employee_id : id

/api/projects/:id/employees/:id
  GET
  POST
  DELETE

#### Tasks of a project
/api/projects/:id/tasks
  GET
    query_param : status=[done, todo]
  POST

/api/projects/:id/tasks/:id
  GET
  PATCH
  DELETE



Create the database in the (docker-compose)[https://stackoverflow.com/questions/65886528/typeorm-create-database-migration]

Swagger : localhost:3000/swagger

Set unique back to true