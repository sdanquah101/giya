export const EVENT_DATE = new Date('2025-02-02T09:00:00.000Z');

export const calculateTimeLeft = () => {
  const now = new Date();
  const difference = EVENT_DATE.getTime() - now.getTime();
  
  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  };
};