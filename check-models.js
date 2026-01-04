(async () => {
  const res = await fetch(
    'https://generativelanguage.googleapis.com/v1/models?key=YOUR_API_KEY'
  );
  const data = await res.json();
  console.log(data);
})();
