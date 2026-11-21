module.exports=(q,r)=>{r.setHeader("Cache-Control","no-store");r.json({status:"healthy",time:new Date().toISOString()})};
