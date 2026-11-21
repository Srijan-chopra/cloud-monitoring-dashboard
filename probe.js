// Real HTTP check made from a Vercel server. Only your own site (and hosts in ALLOWED_HOSTS) can be probed.
module.exports = async (req, res) => {
  const region = process.env.VERCEL_REGION || 'local';
  let target;
  try { target = new URL(req.query.url); } catch (e) { return res.status(400).json({ error: 'Invalid url' }); }
  const allowed = [req.headers.host, ...(process.env.ALLOWED_HOSTS || '').split(',').map(h => h.trim()).filter(Boolean)];
  if (!['http:', 'https:'].includes(target.protocol) || !allowed.includes(target.host)) {
    return res.status(403).json({ error: 'Host not allowed. Add it to ALLOWED_HOSTS.' });
  }
  const start = Date.now();
  try {
    const r = await fetch(target, { redirect: 'manual', signal: AbortSignal.timeout(8000), headers: { 'user-agent': 'MonitorProbe/1.0' } });
    res.setHeader('Cache-Control', 'no-store');
    res.json({ status: r.status, ms: Date.now() - start, region });
  } catch (e) {
    res.json({ status: 504, ms: Date.now() - start, region, error: String(e.message || e) });
  }
};
