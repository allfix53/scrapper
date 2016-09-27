var mongoose = require('mongoose');
// var Promise = require("bluebird");
// Promise.promisifyAll(mongoose);

mongoose.connect('mongodb://localhost/scrapper');
var Schema = mongoose.Schema;

var data = new Schema(
    {
        "Received": {
            type: String,
            required: false
        },
        "X-Sa-Serial": {
            type: String,
            required: false
        },
        "From": {
            type: String,
            required: false
        },
        "X-Envelope-From": {
            type: String,
            required: false
        },
        "recipients": {
            type: String,
            required: false
        },
        "stripped-signature": String,
        "To": {
            type: String,
            required: false
        },
        "message-headers": {
            type: Object,
            required: false
        },
        "content-id-map": Object,
        "X-Dynectemail-Msg-Key": String,
        "Dkim-Signature": String,
        "X-Sa-Workid": String,
        "subject": {
            type: String,
            required: false
        },
        "X-Provider": String,
        "stripped-html": {
            type: String,
            required: false
        },
        "from": {
            type: String,
            required: false
        },
        "sender": {
            type: String,
            required: false
        },
        "Subject": {
            type: String,
            required: false
        },
        "X-Dynectemail-X-Headers": {
            type: String,
            required: false
        },
        "Content-Transfer-Encoding": String,
        "X-Mailgun-Incoming": String,
        "X-Feedback-Id": String,
        "stripped-text": String,
        "Sender": String,
        "attachments": Object,
        "X-Dynectemail-Msg-Hash": String,
        "body-html": String,
        "X-Dynemail-Meta": String,
        "Mime-Version": String,
        "Date": String,
        "Message-Id": String,
        "Content-Type": String,
        "body-plain": String,
        "X-Sa-Messageid": String,
        "X-Sa-Userid": String,
        "created_at": {
            type: Date,
            default: new Date
        },
        "updated_at": {
            type: Date,
            default: new Date
        }
    }
);

module.exports = {
    data: mongoose.model('data', data)
}