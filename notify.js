// Sends alert text to a Discord or Slack webhook set in the WEBHOOK_URL environment variable.
module.exports = async (req, res) => {
  const url = process.env.WEBHOOK_URL;
  const text = String((req.body && req.body.text) || '').slice(0, 300);
  if (!url || !text) return res.json({ sent: false });
  try {
    const r = await fetch(url, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ content: text, text }) });
    res.json({ sent: r.ok });
  } catch (e) { res.json({ sent: false }); }
};
