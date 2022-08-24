'use strict';

module.exports.getRoomById = async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'getRoomById',
          event
        },
        null,
        2
      ),
    };
  };

  module.exports.getAllRooms = async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'getAllRooms',
          
        },
        null,
        2
      ),
    };
  };

  module.exports.postNewRoom= async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'postNewRoom',
          
        },
        null,
        2
      ),
    };
  };
  
