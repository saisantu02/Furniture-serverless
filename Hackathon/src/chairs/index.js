'use strict';

module.exports.getAllTheChairs = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'getAllTheChairs',
        input: event,
      },
      null,
      2
    ),
  };
};


module.exports.getChairsByRoom = async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'getChairsByRoom',
          input: event,
        },
        null,
        2
      ),
    };
  };

  module.exports.getChairsById = async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'getChairsById',
          input: event,
        },
        null,
        2
      ),
    };
  };

  module.exports.postChair= async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'postChair',
          input: event,
        },
        null,
        2
      ),
    };
  };

module.exports.postChairsByRoom= async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'postChairsByRoom',
          input: event,
        },
        null,
        2
      ),
    };
  };

module.exports.putChair= async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'putChair',
          input: event,
        },
        null,
        2
      ),
    };
  };

module.exports.deleteChairById= async (event) => {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'deleteChairById',
          input: event,
        },
        null,
        2
      ),
    };
  };
