const map = new Map();

module.exports = function rateLimit(userId) {
  const now = Date.now();
  const windowMs = 60000;
  const limit = 5;

  if (!map.has(userId)) map.set(userId, []);
  const times = map.get(userId).filter(t => now - t < windowMs);
  times.push(now);
  map.set(userId, times);

  return times.length <= limit;
};
