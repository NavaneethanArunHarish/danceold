var scheduledetail = require('../Models/schedule_model');
var eventdata = require('../Models/event_model')
var userdata = require('../Models/user_model')
var assset = require('../Models/assets_model')
var business = require('../Models/business_model')

module.exports.create_schedule_detail = function (schedule_detail, callback) {
  var schedule = new scheduledetail(schedule_detail);
  schedule.save(function (err) {
    if (err) {
      callback(err);
    }
    else {
      callback(schedule);
    }
  });
};

module.exports.update_schedule_detail = function (callback) {
  scheduledetail.find(function (err, schedule_detail) {
    if (err) {
      callback(err);
    }
    else {
      callback(schedule_detail);
    }
  });
};




module.exports.delete_schedule_detail = function (schedule_detail_id, callback) {
  scheduledetail.findByIdAndRemove(schedule_detail_id, function (err, schedule_detail_id) {
    if (err) {
      callback(err);
    }
    else {
      callback({ message: "removed", schedule_detail_id: schedule_detail_id });
    }
  });
}; 

module.exports.getall_schedule_detail = function (schedule_detail,callback) {
  scheduledetail.find(function (schedule_detail) {
    callback(schedule_detail);
  });
}



module.exports.getScheduleDetailByDateRange = function (scheduleDate, callback) {
    var startDate = scheduleDate.startDate;
    var endDate = scheduleDate.endDate;
    console.log('========================================', startDate)
    console.log('========================================', endDate)
    scheduledetail.find(
      { "created_date": { "$gte": startDate, "$lte": endDate } })
      .populate([
        { path: 'eventid', model: eventdata },
        { path: 'participants', model: userdata }
      ])
      .exec(function (err, output) {
        callback(output);
      })
  }