# KarGu_-vning2_api
# Intro:
**localhost:3000** <br>
An API that implements jsonplaceholder post and users endpoints, backed by a mongo database.

The purpose for this API is educational and meant as a step between using jsonplaceholder in a UI and implementing your own API.

# Posts
### The HTTP Methods supported are:
- GET
- POST
- PUT
- PATCH 
- DELETE

### Paths should look like this:
/posts - List of posts <br>
/posts/{postId} - Gets a specific post with Id

### Method: GET

#### Example 1:
```
curl -i -H "Content-Type:application/json" localhost:3000/posts/1
```

Gets the information from the specified URI

**The result will look like this:**<br>
```
{"_id":"5e806d9f42fbde006b6b9ecf","userId":1,"id":1,"title":"sunt aut facere repellat provident occaecati excepturi optio reprehenderit","body":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto","__v":0}
```

#### Example 2 with jq and {postId}:
```
curl localhost:3000/posts/1 | jq .
```

Gets the information in the specified URI and displays it in JSON format

**The result will look like this:**<br>
```json
  {
  "title": "string",
  "body": "string",
  "userId": 0
}
```

### Method: POST
#### Example 1:
```
curl -i -X POST -H "Content-Type:application/json" localhost:3000/posts -d '{"title":"Hi, World", "body":"Fresh as morning dew", "userId": "1"}' 
```

Posts the information you give to the Object

**The result will look like this:**<br>
```
{"_id":"5e9eb17e09cee0002106f314","body":"Fresh as morning dew","title":"Hi, World","userId":1,"id":811,"__v":0}
```

#### Example 2 with jq:
```
curl -X POST -H "Content-Type:application/json" localhost:3000/posts -d '{"title":"Hi, World", "body":"Fresh as morning dew", "userId": "1"}' | jq
```

```json
 {
  "title": "string",
  "body": "string",
  "userId": 0
}
```

### Method: PUT
#### Example 1<br>
```
curl -i -X PUT localhost:3000/posts/3 -H "Content-Type:application/json" -d  '{
  "body": "NewBody", "title": "NewTitle", "userId": "1337"}'
```

  Replaces the information on the specified path, with the provided data

#### Result:
```
Status: 200 OK
```
Returns body with the old information, should look like this
```
{"_id":"5e9ed8353c9c34a2d807f465","id":3,"__v":0,"body":"OldBody","title":"OldTitle","userId":13}
```

With jq:
#### Example with jq
```
curl -X PUT localhost:3000/posts/1 -H "Content-Type:application/json" -d  '{"body": "NewBody", "title": "NewTitle", "userId": "1337"}' | jq
```
```json
 {
  "title": "string",
  "body": "string",
  "userId": 0
}
```


### Method: PATCH
#### Example: <br>
```
curl -i -X PATCH localhost:3000/posts/3 -H "Content-Type:application/json" -d  '{
  "body": "newBody", "userId": "3"}'
```
  Updates a part of the object on the specified path, depending on the provided data

#### Result:
```
Status: 200 OK
```
Returns body with the updated information

```
{"body": "newBody", "title": "oldTitle", userId": "3"}
```

#### Example with jq
```
curl -X PATCH localhost:3000/posts/3 -H "Content-Type:application/json" -d  '{"body": "newBody", "userId": "3"}' | jq
```
```json
{
  "title": "string",
  "body": "string",
  "userId": 0
}
```

### Method: DELETE

#### Example:
```
curl -i -X DELETE localhost:3000/posts/1
```

Deletes an object or endpoint at the specified path

#### Result:
```
Status: 
200 OK - Path found, was deleted

204 No Content - Path not found, nothing changed
```

# Users
### The HTTP Methods supported are:
- GET
- POST
- PUT - Must have specific user Id

### Paths should look like this:
/users - List of users <br>
/users/{userId} - Gets a specific user with users Id


### Method: GET 
#### Example 1:
```
curl -i -H "Content-Type:application/json" localhost:3000/users/1
```
Gets the information from the specified URI.

#### Result will look like this:<br>
```
{"address":{"geo":{"lat":-37.3159,"lng":81.1496},"street":"Kulas Light","suite":"Apt. 556","city":"Gwenborough","zipcode":"92998-3874"},"_id":"5e806d9f42fbde006b6b9ec5","id":1,"name":"Leanne Graham","username":"Bret","email":"Sincere@april.biz","__v":0}
```

#### Example 2 with jq:
```
curl -X GET localhost:3000/users/1 | jq .<br>
```

```json
{
  "_id": "5e806d9f42fbde006b6b9ec5",
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "__v": 0
}
```
Gets the information in the specified URI and displays it in JSON format.


### /users
#### Method: POST

#### /users
### Method: POST
Description: Create a user
#### Headers:
```"Content-Type: application/json"```

##### Body:
```
'{
  "_id": "5e806d9f42fbde006b6b9ec5",
  "id": 1,
  "name": "Frodo Baggins",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "__v": 0
}'
```

##### Example:
curl -i -X POST -H "Content-Type:application/json" localhost:3000 -d '{
  "_id": "5e806d9f42fbde006b6b9ec5",
  "id": 1,
  "name": "Frodo Baggins",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "__v": 0
}'

Result:
```
{
  "_id": "5e806d9f42fbde006b6b9ec5",
  "id": 1,
  "name": "Frodo Baggins",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "__v": 0
}
```
##### 201 Created
-------------------------------------------------------------------
#### /users/{userId}
### Method: PUT
Description: Replace a user
#### Headers:
```"Content-Type: application/json"```

##### Body:
```
{
  "_id": "5e806d9f42fbde006b6b9ece",
  "id": 10,
  "name": "string",
  "username": "string",
  "email": "string",
  "__v": 0
}

```
##### Example:
curl -i -X PUT -H "Content-Type:application/json" localhost:3000/users/1 -d '{
  "_id": "5e806d9f42fbde006b6b9ec5",
  "id": 1,
  "name": "Frodo Baggins",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "__v": 0
}'

Result:
```
'{
  "_id": "5e806d9f42fbde006b6b9ec5",
  "id": 1,
  "name": "Frodo Baggins",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "__v": 0
}'
```
##### 200 OK
-------------------------------------------------------------------
