 export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://www.fulltank.co.il/bin/api.php?method=stations.getList"
    );

    if (!response.ok) {
      return res.status(500).json({ error: "Failed to fetch data" });
    }

    const data = await response.json();

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: "Server error", details: error.message });
  }
}
