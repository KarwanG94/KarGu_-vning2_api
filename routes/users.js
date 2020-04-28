theUsers = (req, res) => {
response={
        "_id": "5ea6f22f13ee69002583acc1",
        "name": "string",
        "username": "string",
        "email": "string",
        "id": 390,
        "__v": 0,

        "query": req.query,
        "params": req.params,
        "headers": req.headers
    }
    res.status(200)
    res.send(response);
};

postUsers = (req, res) => {
   response={
      "_id": "5ea6f22f13ee69002583acc1",
      "name": "string",
      "username": "string",
      "email": "string",
      "id": 390,
      "__v": 0,
    }
    res.status(201)
    res.send(response);
}

putUsers = (req, res) => {
  response={
       "_id": "5ea6f22f13ee69002583acc1",
       "name": "string",
       "username": "string",
       "email": "string",
       "id": 390,
       "__v": 0,
   }
   res.status(200)
   res.send(response);
}

module.exports = {
  theUsers: theUsers,
  params: theUsers,
  postUsers: postUsers,
  putUsers: putUsers,
} 

