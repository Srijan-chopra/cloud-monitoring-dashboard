module.exports=async(q,r)=>{const ms=Math.min(+q.query.ms||1200,3000);await new Promise(x=>setTimeout(x,ms));r.setHeader("Cache-Control","no-store");r.json({slow:true,ms})};
