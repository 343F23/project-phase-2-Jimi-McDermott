async function getaffirmations() {
  const response = await fetch('https://www.affirmations.dev/');
  const data = await response.json();
  return data;
}