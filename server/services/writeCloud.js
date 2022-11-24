const axios = require('axios');
const writeDataBaseHARPER = (message, username, time)=>{
    const dbUrl = process.env.HARPERDB_URL;
    const dbPw = process.env.HARPERDB_PW;
    // const dbUrl = "https://chatone-asrorqobulov.harperdbcloud.com";
    // const dbPw = "QXNyb3I6QXNyb3IyMDAxIQ==";
    if(!dbUrl || !dbPw ) return null;

    var data = JSON.stringify({
        operation: 'insert',
        schema: 'chat_app_asror',
        table: 'xabar',
        records: [
          {
            message,
            username
          },
        ],
    });
    
      var config = {
        method: 'post',
        url: dbUrl,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': dbPw,
        },
        data: data,
      };
    
      return new Promise((resolve, reject) => {
        axios(config)
          .then(function (response) {
            resolve(JSON.stringify(response.data));
          })
          .catch(function (error) {
            reject(error);
          });
      });
}

module.exports = writeDataBaseHARPER;

