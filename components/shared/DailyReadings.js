/**
 * Responsible for getting the daily readings.
 * Outputs the readings in the following format:
 * [{:date=>"2020-08-02T05:00:00.000Z",
  :lectionaryLongName=>"9th Sunday after Pentecost",
  :lectionaryShortName=>"Proper 13",
  :lectionaryYear=>"A"},
 {:date=>"2020-08-09T05:00:00.000Z",
  :lectionaryLongName=>"10th Sunday after Pentecost",
  :lectionaryShortName=>"Proper 14",
  :lectionaryYear=>"A"},
 {:date=>"2020-08-16T05:00:00.000Z",
  :lectionaryLongName=>"11th Sunday after Pentecost",
  :lectionaryShortName=>"Proper 15",
  :lectionaryYear=>"A"},
 {:date=>"2020-08-23T05:00:00.000Z",
  :lectionaryLongName=>"12th Sunday after Pentecost",
  :lectionaryShortName=>"Proper 16",
  :lectionaryYear=>"A"},
 {:date=>"2020-08-30T05:00:00.000Z",
  :lectionaryLongName=>"13th Sunday after Pentecost",
  :lectionaryShortName=>"Proper 17",
  :lectionaryYear=>"A"}]
 */
import React from 'react';
import lectionary from 'lectionary';
import { Text } from 'react-native';

import Holidays from './data/Holidays';
import YearOne from './data/YearOne';
import YearTwo from './data/YearTwo';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';

const getYear = (date) => {
  if (date.lectionaryYear === "A") {
    return YearOne();
  // eslint-disable-next-line no-else-return
  } else {
    return YearTwo();
  }
}

const getSpecificDay = (date) => {
  const months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
  return(`${months[date.getMonth()]} ${date.getDate()}`);

}

const getWeekDay = (date) => {
  const weekdays = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ]
  const day = date.getDay();
  return weekdays[day];
}

const getWeek = (date) => {
  let prevLectio;
  const year = date.getYear() + 1900;
  const month = date.getMonth();
  const lectio = lectionary(year, month);
  if (month == 1) {
    prevLectio = lectionary(year - 1, 12);
  } else {
    prevLectio = lectionary(year, month - 1);
  }
  const week = lectio.filter(w => {
    return (
      date.valueOf() >= w.date.valueOf() &&
      date.getDate() < w.date.valueOf() + 604800000
    );
  })[0];
  if (week != null) { return week; }
  const prevMonthWeek = prevLectio.filter(w => {
    return (
      date.valueOf() >= w.date.valueOf() &&
      date.valueOf() < w.date.valueOf() + 604800000
    );
  })[0];
  if (prevMonthWeek != null) { return prevMonthWeek; }
  return null;
}

const getDay = (date) => {
  const week = getWeek(date);
  // check for a Holiday
  const holiday = Holidays().filter(day => day.day === getSpecificDay(date))[0]
  if (holiday) { return holiday };
  // check any other special days
  const specificDay= getYear(date).filter(day => day.day === getSpecificDay(date))[0]
  if (specificDay) { return specificDay; }
  // Otherwise give us the regular day of the week
  return getYear(date).filter(day => day.week === week.lectionaryShortName && day.day === getWeekDay(date))[0]
}

const getFirstMorningLesson = (date) => {
  const day = getDay(date);
  if (day == null) {
    return "";
  }
  if (day.lessons.morning != null) {
    return day.lessons.morning.first;
  }
  return day.lessons.first;
}

const getSecondLesson = (date) => {
  const day = getDay(date);
  if (day == null) {
    return "";
  }
  return day.lessons.second;
}

const getGospelLesson = (date) => {
  const day = getDay(date);
  if (day == null) {
    return "";
  }
  return day.lessons.gospel
}

const DailyReadings = () => {
  const date = new Date();
  // const date = new Date('2020-12-26T18:00:00.000Z')

  return(
    <>
      {/* <Text>The lessons of today are: </Text>
      <Text>First Reading: {getFirstMorningLesson(date)}</Text>
      <Text>Second Reading: {getSecondLesson(date)}</Text>
      <Text>Gospel Reading: {getGospelLesson(date)}</Text> */}

      <Text>{getWeek(date).lectionaryShortName}</Text>
      <Text>First Reading: {getFirstMorningLesson(date)}</Text>
      <Text>{date.toDateString()}</Text>

    </>
  );
};

export default DailyReadings;
