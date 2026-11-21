module.exports=(q,r)=>{r.setHeader("Cache-Control","no-store");r.status(500).json({error:"Intentional failure for monitoring tests"})};
