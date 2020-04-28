const express = require('express')
const routes = require("./routes")
const app = express();


// environment variable PORT or 3000 if unset
const port = process.env.PORT || 3000;

app.use('/', routes)

const listener = app.listen(port, () => {
  console.info(`Server is listening on port ${listener.address().port}.`);
});



// app.get('/users', function(req, res){
//   res.send(
//     {
//       "address": {
//         "geo": {
//           "lat": -37.3159,
//           "lng": 81.1496
//         },
//         "street": "Kulas Light",
//         "suite": "Apt. 556",
//         "city": "Gwenborough",
//         "zipcode": "92998-3874"
//       },
//       "_id": "5e806d9f42fbde006b6b9ec5",
//       "id": 1,
//       "name": "Leanne Graham",
//       "username": "Bret",
//       "email": "Sincere@april.biz",
//       "__v": 0
//     })
//   })

// app.post('/users', function(req, res){
//     res.status(201)
//     res.send(
//         {
//             "address": {
//               "geo": {
//                 "lat": 0,
//                 "lng": 0
//               },
//               "street": "string",
//               "suite": "string",
//               "city": "string",
//               "zipcode": "string"
//             },
//             "_id": "5ea6f22f13ee69002583acc1",
//             "name": "string",
//             "username": "string",
//             "email": "string",
//             "id": 390,
//             "__v": 0
//           }
//     )
// })


