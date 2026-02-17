export default async function handler(req, res) {
  const { uid } = req.query;

  if (!uid) {
    return res.status(400).json({ error: "UID required" });
  }

  try {
    const response = await fetch(`https://kamruluidcheck.vercel.app/api/account/?uid=${uid}&region=BD`);
    const data = await response.json();

    return res.status(200).json({
      nickname: data.AccountInfo?.AccountName || "Not found"
    });

  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch" });
  }
}
