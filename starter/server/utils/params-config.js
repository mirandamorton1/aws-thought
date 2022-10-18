const { v4: uuidv4 } = require('uuid');

const params = (fileName) => {
    const myFile = fileName.originalname.split('.');
    const fileType = myFile[myFile.length - 1];
  
    const imageParams = {
      // Replace the <My_Bucket_Name> with the name of your own S3 bucket
      Bucket: 'user-images-b31a3bb5-4b3a-49c7-a458-9fc5b91b4fe5',
      Key: `${uuidv4()}.${fileType}`,
      Body: fileName.buffer,
      ACL: 'public-read'
    };
  
    return imageParams;
  };

  module.exports = params;
