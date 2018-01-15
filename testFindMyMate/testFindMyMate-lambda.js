let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {
    ddb.get({
        TableName: 'hs_user_profile',
        Key: {'username': event.username}
    }, function (err, data) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, data);
        }
    });

}