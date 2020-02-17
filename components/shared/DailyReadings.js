/**
 * Responsible for getting the deaily readings.
 * Outputs the readings in the following format:
 * {
    year: 'Year One',
    season: 'Christmas',
    week: 'Christmas Day and Following',
    day: 'Dec 25',
    title: 'The Nativity of Our Lord Jesus Christ: Christmas Day',
    psalms: {
        morning: [ '2', '85' ],
        evening: [ '110:1–5(6–7)', '132' ] },
    lessons: {
        first: 'Zech 2:10–13',
        second: '1 John 4:7–16',
        gospel: 'John 3:31–36'
    },
    _id: '6UcpQxKk2WoSRDrt'
  }
 */
import React from 'react';
import lectionary from 'lectionary';
import BcpText from './BcpText';

const DailyReadings = () => {
  const date = new Date();
  const year = date.getYear() + 1900;
  const month = date.getMonth();
  const lectio = lectionary(year, month);
  const week = lectio.filter(w => {
    return (
      w.date.getDate() >= date.getDate() &&
      w.date.getDate() < date.getDate() + 7
    );
  })[0];
  return <BcpText>{week.lectionaryLongName}</BcpText>;
};

export default DailyReadings;
