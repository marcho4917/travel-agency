export const formatTime = (arg1) => {
  if(arg1 == 'undefined') {
    return null;
  } else if (isNaN(arg1)) {
    return null;
  } else if (arg1 < 0) {
    return null;
  } else {
    let seconds = String(Math.floor(arg1%60));
    seconds = seconds.padStart(2, '0');
    let minutes = String(Math.floor((arg1/60)%60));
    minutes = minutes.padStart(2, '0');
    let hours = String(Math.floor(arg1/3600));
    hours = hours.padStart(2, '0');
    return hours + ':' + minutes + ':' + seconds;
  }
};