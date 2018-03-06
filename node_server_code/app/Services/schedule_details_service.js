var dao = require("../DAO/schedule_details_dao")

module.exports.create_schedule_detail = function (detail, callback) {
  dao.create_schedule_detail(detail, function (schedule_detail) {
    callback(schedule_detail);
  });
}

module.exports.update_schedule_detail = function (detail, callback) {
  dao.update_schedule_detail(detail, function (schedule_detail) {
    callback(schedule_detail);
  });
}

module.exports.delete_schedule_detail = function (schedule_detail_id, callback) {
  dao.delete_schedule_detail(schedule_detail_id, function (schedule_detail_id) {
    callback(schedule_detail_id);
  });
}

module.exports.getall_schedule_detail = function (callback) {
  dao.getall_schedule_detail(function (schedule_detail) {
    callback(schedule_detail);
  });
}

module.exports.getScheduleDetailByDateRange = function (scheduleDate,callback) {
  dao.getScheduleDetailByDateRange(scheduleDate,function (schedule) {
    callback(schedule);
  });
}
  