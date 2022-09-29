import moment from 'moment';

import commonUtils from './commonUtils';

export const TIME_ZONE = (-1 * new Date().getTimezoneOffset()) / 60;
export const SIMPLE_DATE_FORMAT = 'YYYY-MM-DD';
export const DATE_FORMAT = 'MMMM DD YYYY';
export const DATE_FORMAT_DAY = 'MMMM DD YY, HH:mm';
export const TIME_ONLY_FORMAT = 'h:mm A';
export const TIME_FORMAT_24_HOUR_FULL = 'HH:mm:ss';
export const TIME_FORMAT_24_HOUR = 'HH:mm';
export const SERVER_DATE_FORMAT = 'YYYY-MM-DD HH:mm';
export const TIME_FORMAT_ISO8601 = 'YYYY-MM-DDTHH:mm:ssZ';
export const CHAT_TIME_FORMAT =
  SIMPLE_DATE_FORMAT + ' ' + TIME_FORMAT_24_HOUR_FULL;

import CommonUtils from './commonUtils';

class DateUtils {
  getTimeFromNow = time => {
    return moment(time).fromNow(true);
  };

  getUnixTimeStamp = () => {
    return Math.round(new Date().getTime() / 1000);
  };

  convertTimeFormat = (time, fromFormat, toFormat) => {
    return moment(time, fromFormat).format(toFormat);
  };

  getCurrentTime(format = undefined) {
    return moment(Date.now()).format(format ? format : TIME_ONLY_FORMAT);
  }

  getCurrentGivenTime = (givenTime, format = undefined) => {
    return moment(givenTime).format(format ? format : TIME_ONLY_FORMAT);
  };

  addMinutes(givenTime, minutesToAdd, format = undefined) {
    return moment(givenTime)
      .add(minutesToAdd, 'm')
      .format(format ? format : TIME_FORMAT_ISO8601);
  }

  addYears(givenTime, yearsToAdd, format = undefined) {
    return moment(givenTime)
      .add(yearsToAdd, 'y')
      .format(format ? format : TIME_FORMAT_ISO8601);
  }

  getISOString(givenTime) {
    return moment(givenTime).toISOString();
  }

  getDaysBetweenDuration(fromDate, toDate) {
    var compareThis = moment(toDate).toISOString();
    const daysArray = [compareThis];

    while (moment(fromDate).isBefore(compareThis)) {
      compareThis = moment(compareThis)
        .subtract(1, 'day')
        .format(SERVER_DATE_FORMAT);

      if (moment(fromDate).isBefore(compareThis)) {
        daysArray.push(moment(compareThis).toISOString());
      }
    }

    return daysArray;
  }

  getWeeksBetweenDuration(fromDate, toDate) {
    var compareThis = moment(toDate).toISOString();
    const weeksArray = [compareThis];

    while (moment(fromDate).isBefore(compareThis)) {
      compareThis = moment(compareThis)
        .subtract(1, 'week')
        .format(SERVER_DATE_FORMAT);

      if (moment(fromDate).isBefore(compareThis)) {
        weeksArray.push(moment(compareThis).toISOString());
      }
    }

    return weeksArray;
  }

  getMonthsBetweenDuration(fromDate, toDate) {
    var compareThis = moment(toDate).toISOString();
    const monthsArray = [compareThis];

    while (moment(fromDate).isBefore(compareThis)) {
      compareThis = moment(compareThis)
        .subtract(1, 'month')
        .format(SERVER_DATE_FORMAT);

      if (moment(fromDate).isBefore(compareThis)) {
        monthsArray.push(moment(compareThis).toISOString());
      }
    }

    return monthsArray;
  }

  getYearsBetweenDuration(fromDate, toDate) {
    var compareThis = moment(toDate).toISOString();
    const yearsArray = [compareThis];

    while (moment(fromDate).isBefore(compareThis)) {
      compareThis = moment(compareThis)
        .subtract(1, 'year')
        .format(SERVER_DATE_FORMAT);

      if (moment(fromDate).isBefore(compareThis)) {
        yearsArray.push(moment(compareThis).toISOString());
      }
    }

    return yearsArray;
  }

  timeDateFormat = (hour, mint) => {
    var date = moment().tz('America/Los_Angeles').startOf('day');
    date.hour(22);
    date.minutes(45);
  };

  isBetweenTime(time1, time2, format) {
    const time = moment(new Date(), format);
    const beforeTime = moment(time1, format);
    const afterTime = moment(time2, format);
    return time.isBetween(beforeTime, afterTime);
  }

  getTimeObjectFrom24HourFormat = hours => {
    let selected_date = '2017-03-13';
    let timeAndDate = moment(
      selected_date + ' ' + hours,
      SIMPLE_DATE_FORMAT + ' ' + TIME_FORMAT_24_HOUR,
    );
    timeAndDate = timeAndDate.format(TIME_ONLY_FORMAT);
    return timeAndDate;
  };

  set24hours = hours => {
    var dt = moment(hours, ['h:mm A']).format('HH:mm');
    return dt;
  };

  convertToFullDateFromTimeString = timeString => {
    if (!commonUtils.stringIsEmpty(timeString)) {
      let selected_date = moment().format(SIMPLE_DATE_FORMAT);
      let dateObject = moment(
        selected_date + ' ' + timeString,
        SIMPLE_DATE_FORMAT + ' ' + TIME_ONLY_FORMAT,
      );

      return dateObject?.toDate();
    }

    return undefined;
  };

  getCurrentTimeInNearestInterval = currentTime => {
    const hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    let modifiedMins;

    if (minutes > 0 && minutes <= 15) {
      modifiedMins = 0;
    }

    if (minutes > 15 && minutes <= 30) {
      modifiedMins = 30;
    }

    if (minutes > 30 && minutes < 45) {
      modifiedMins = 30;
    }

    if (minutes > 45 && minutes <= 59) {
      modifiedMins = 30;
    }

    currentTime.setMinutes(modifiedMins);
    currentTime.setSeconds(0);

    return currentTime;
  };

  convertToFullDateFromDateString = dateString => {
    if (dateString) {
      let selected_time = moment().format(TIME_ONLY_FORMAT);
      let dateObject = moment(
        dateString + ' ' + selected_time,
        SIMPLE_DATE_FORMAT + ' ' + TIME_ONLY_FORMAT,
      );

      return dateObject?.toDate();
    }

    return undefined;
  };

  timeStampToSimpleFormat = date => {
    return moment(date).format(SIMPLE_DATE_FORMAT);
  };

  timeStampToTimeFormat = date => {
    return moment(date).format('HH:mm');
  };
}

export default new DateUtils();
