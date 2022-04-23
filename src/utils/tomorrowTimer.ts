export type TimeLeft = {
    hours: number;
    minutes: number;
    seconds: number;
}

const calculateTimeLeft = (): TimeLeft => {
    let now = new Date();
    now.setHours(24,0,0,0);
    let difference = +now - +new Date();
  
    let timeLeft: TimeLeft = {
        hours: 0,
        minutes: 0,
        seconds: 0
    };
  
    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
  
    return timeLeft;
}
  
export {calculateTimeLeft}