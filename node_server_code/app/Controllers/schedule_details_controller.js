var service = require("../Services/schedule_details_service")
var wrapper = require('../../app/constants/wrapper')

module.exports.create_schedule_detail = function (req, res) {
    var schedule_detail = req.body;
    service.create_schedule_detail(schedule_detail, function (detail) {
        res.json(detail);
    })
}

module.exports.update_schedule_detail = function (req, res) {
    var schedule_detail = req.body;
    service.update_schedule_detail(schedule_detail, function (detail) {
        res.json(detail);
    })
}

module.exports.delete_schedule_detail = function (req, res) {
    var schedule_detail_id = req.params.id;
    service.delete_schedule_detail(schedule_detail_id, function (detail_id) {
        res.json(detail_id);
    })
}

module.exports.getall_schedule_detail = function (req, res) {
    service.getall_schedule_detail(function (detail) {
        res.json(detail);
    })
}

module.exports.getScheduleDetailByDateRange = function (req, res) {
    var scheduleDate = req.body;
    service.getScheduleDetailByDateRange(scheduleDate,function (detail) {
        res.json(detail);
    })
}


