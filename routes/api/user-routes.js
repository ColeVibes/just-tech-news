const router = require('express').Router();
const { User } = require('../../models');

//get/api/users
router.get('/', (req, res) => {
    User.findAll()
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

//get api/users/1
router.get('/:id', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        }
    })
      .then(dbUserData => {
          if (!dbUserData) {
              res.status(404).json({message: 'No user foudn with this id'});
              return;
          }
          res.json(dbUserData);
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      })
});

//post api/users
router.post('/', (req,res) => {});

//PUT /api/users/1
router.put('/:id', (req,res) => {});

//DELETE /api/users/1
router.delete('/:id', (req,res) => {});

module.exports = router;