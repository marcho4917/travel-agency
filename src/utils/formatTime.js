export const formatTime = (arg1) => {
  if(arg1 == 'undefined') {
    return null;
  } else if (isNaN(arg1)) {
    return null;
  } else if (typeof arg1 == 'function') {
    return null;
  } else if (arg1 < 0) {
    return null;
  } else {
    let seconds = Math.floor(arg1%60);
    if(seconds < 10) { 
      seconds = '0' + seconds;
    }
    let minutes = Math.floor((arg1/60)%60);
    if(minutes < 10) {
      minutes = '0' + minutes;
    }
    let hours = Math.floor(arg1/3600);
    if(hours < 10) {
      hours = '0' + hours;
    }
    const output = hours +':'+ minutes +':'+ seconds;
    return output;
  }
};