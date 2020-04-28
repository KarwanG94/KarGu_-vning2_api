getUsers = (req, res) => {
  console.log(req.body);
  response={
    "_id": "5ea6f22f13ee69002583acc1",
    "name": "string",
    "username": "string",
    "email": "string",
    "id": req.params.userId,
    "__v": 0,
    }
    res.status(200)
    res.send(response);
};

postUsers = (req, res) => {
  console.log(req.body);
  response={
    "_id": "5ea6f22f13ee69002583acc1",
    "name": "string",
    "username": "string",
    "email": "string",
    "id": req.params.userId,
    "__v": 0,
  }
  res.status(201)
  res.send(response);
}

putUsers = (req, res) => {
  console.log(req.body);
  response={
       "_id": "5ea6f22f13ee69002583acc1",
       "name": "string",
       "username": "string",
       "email": "string",
       "id": req.params.userId,
       "__v": 0,
   }
   res.status(200)
   res.send(response);
}

module.exports = {
  getUsers: getUsers,
  postUsers: postUsers,
  putUsers: putUsers,
} 

