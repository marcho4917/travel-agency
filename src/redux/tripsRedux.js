/* SELECTORS */

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;

  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  // TODO - filter by duration
  if(filters.duration) {
    output = output.filter(trip => 
      filters.duration.from <= trip.days);

    output = output.filter(trip =>
      filters.duration.to >= trip.days);
  }
  // TODO - filter by tags
  if (filters.tags.length > 0) {
    output = output.filter(trip =>
      trip.tags.some(tag => filters.tags.includes(tag)));
  }
  // TODO - sort by cost descending (most expensive goes first)
  
  const compare = (a, b) => {
    const cleanA = parseInt(a.cost.replace('$',''));
    const cleanB = parseInt(b.cost.replace('$',''));
    if (cleanA - cleanB > 0) {
      return -1;
    }
    if (cleanA - cleanB < 0) {
      return 1;
    }
    else return 0;
  };

  output = output.sort(compare);

  return output;
    
};

export const getTripById = ({trips}, tripId) => {
  const filtered = trips.filter(trip => trip.id == tripId);

  console.log('filtering trips by tripId:', tripId, filtered);
  return filtered.length ? filtered[0] : {error: true};
};

export const getTripsForCountry = ({trips}, countryCode) => {
  const filtered = trips.filter(trip => trip.country.code == countryCode);

  console.log('filtering trips by countryCode:', countryCode, filtered);
  return filtered.length ? filtered : [{error: true}];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
