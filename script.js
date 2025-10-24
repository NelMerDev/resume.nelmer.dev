async function updateVisitorCount() {
  try {
    const response = await fetch('https://p62ky3oajf.execute-api.us-east-1.amazonaws.com');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    document.getElementById('visitor-count').textContent = data.count;
  } catch (error) {
    console.error('Error fetching visitor count:', error);
    document.getElementById('visitor-count').textContent = 'N/A';
  }
}

updateVisitorCount();