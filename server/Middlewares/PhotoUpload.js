const path = require("path")
const multer = require("multer")


// TODO: Photo Storage
const photoStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        if(file){
            cb(null, Date.now() + '-' + file.originalname);
        } else {
            cb(null , false)
        }
    }
  });

  // Photo Upload Middleware
  const PhotoUpload = multer({
    storage: photoStorage,
    fileFilter: function(req , file , cb){
        if (file.mimetype.startsWith("image")){
            cb(null , true)
        } else {
            cb ({ message : "Unsupported File format"} , false)
        }
    },
    limits: { fileSize: 1024 * 1024 * 5 } // 5 MegaByte
  })

  module.exports = PhotoUpload

