console.log("🚀 Launch cost estimator script starting...");const y={electronics:{sourcing:[800,2500],inventory:[2e3,8e3],shipping:[300,800],platform:[500,1500],marketing:[1500,5e3],legal:[200,800],working:[1e3,3e3],considerations:["Electronics need safety certifications ($200-800)","Higher import duties (15-25%) from overseas","Plan for 15-20% return rate","Competition requires strong advertising budget"]},fashion:{sourcing:[400,1500],inventory:[1500,6e3],shipping:[200,600],platform:[300,1200],marketing:[1e3,4e3],legal:[150,500],working:[800,2500],considerations:["Fashion has 25-35% return rates","Seasonal inventory planning critical","Instagram/TikTok marketing essential","Size guides reduce returns significantly"]},beauty:{sourcing:[600,2e3],inventory:[1800,7e3],shipping:[250,700],platform:[400,1300],marketing:[2e3,6e3],legal:[300,1e3],working:[900,2800],considerations:["FDA compliance required for skincare","Influencer marketing drives 60% of sales","Before/after content converts best","Expiration dates affect inventory management"]},fitness:{sourcing:[500,1800],inventory:[1600,5500],shipping:[250,650],platform:[350,1100],marketing:[1200,4200],legal:[150,600],working:[750,2400],considerations:["New Year demand spike (3x normal)","Video demonstrations boost sales 40%","Fitness influencer partnerships work well","Equipment weight affects shipping costs"]},home:{sourcing:[700,2200],inventory:[2e3,7500],shipping:[400,1e3],platform:[400,1200],marketing:[1e3,3500],legal:[200,700],working:[800,2600],considerations:["Room staging photos increase sales 25%","Seasonal trends affect demand","Larger items = higher shipping costs","Home improvement seasons boost sales"]},jewelry:{sourcing:[800,3e3],inventory:[2500,1e4],shipping:[150,400],platform:[500,1500],marketing:[1800,5500],legal:[300,1200],working:[1200,4e3],considerations:["High-value shipping insurance required","Professional photography essential","Holiday seasons drive 40% of sales","Authentication builds customer trust"]},books:{sourcing:[300,1e3],inventory:[800,3e3],shipping:[150,400],platform:[250,800],marketing:[600,2e3],legal:[100,400],working:[400,1200],considerations:["Print-on-demand reduces inventory risk","Amazon dominates - differentiation key","Educational content marketing works","Low margins require volume sales"]},toys:{sourcing:[600,2e3],inventory:[1500,6e3],shipping:[250,700],platform:[350,1e3],marketing:[1200,4e3],legal:[200,800],working:[700,2300],considerations:["Safety testing required for children's toys","Holiday season drives 50% of sales","Parent review content crucial","Age-appropriate marketing regulations"]},food:{sourcing:[800,2500],inventory:[1200,4500],shipping:[300,800],platform:[400,1200],marketing:[1500,4500],legal:[400,1500],working:[900,2800],considerations:["FDA regulations and nutritional labeling","Expiration dates limit inventory time","Cold chain shipping increases costs","Subscription model reduces acquisition cost"]}},v={sourcing:[500,1800],inventory:[1500,5500],shipping:[250,650],platform:[350,1100],marketing:[1e3,3500],legal:[150,600],working:[700,2200],considerations:["Research your category's specific regulations","Start small and scale based on demand","Customer service quality drives repeat sales","Plan for seasonal demand changes"]};function a(){console.log("🎯 DOM loaded, setting up event listener");const e=document.getElementById("analyze-button");console.log("Button found:",!!e),e?e.addEventListener("click",function(i){i.preventDefault(),console.log("🎉 Button clicked!"),x()}):console.error("❌ Analyze button not found")}function x(){console.log("📊 Calculate costs function called");const e=document.getElementById("productType").value,i=parseInt(document.getElementById("targetPrice").value)||29,n=document.getElementById("businessScale").value;if(console.log("Form values:",{productType:e,targetPrice:i,businessScale:n}),!e){M("Please select a product category");return}k(),S(),setTimeout(()=>{const o=y[e]||v,l=n==="small"?.7:n==="large"?1.3:1,s=i<25?.8:i>100?1.2:1,t=l*s,r={sourcing:[Math.round(o.sourcing[0]*t),Math.round(o.sourcing[1]*t)],inventory:[Math.round(o.inventory[0]*t),Math.round(o.inventory[1]*t)],shipping:[Math.round(o.shipping[0]*t),Math.round(o.shipping[1]*t)],platform:[Math.round(o.platform[0]*t),Math.round(o.platform[1]*t)],marketing:[Math.round(o.marketing[0]*t),Math.round(o.marketing[1]*t)],legal:[Math.round(o.legal[0]*t),Math.round(o.legal[1]*t)],working:[Math.round(o.working[0]*t),Math.round(o.working[1]*t)]};w(r,o.considerations,e,i,n),z(),L()},2e3)}function w(e,i,n,o,l){console.log("🎨 Displaying results");const s=document.getElementById("placeholder");s&&s.classList.add("hide");const t=e.sourcing[0]+e.inventory[0]+e.shipping[0]+e.platform[0]+e.marketing[0]+e.legal[0]+e.working[0],r=e.sourcing[1]+e.inventory[1]+e.shipping[1]+e.platform[1]+e.marketing[1]+e.legal[1]+e.working[1],u=`
      <div style="background: rgba(255, 255, 255, 0.6); padding: 25px 20px; border-radius: 12px; text-align: center; border: 1px solid rgba(249, 115, 22, 0.1); transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(249, 115, 22, 0.1);" class="summary-card">
        <div style="font-size: 1.8rem; font-weight: 700; color: #f97316; margin-bottom: 5px; line-height: 1.2;" class="summary-value">${t.toLocaleString()}</div>
        <div style="font-size: 0.85rem; color: #6c757d; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; line-height: 1.3;" class="summary-label">Minimum Budget</div>
      </div>
      <div style="background: rgba(255, 255, 255, 0.6); padding: 25px 20px; border-radius: 12px; text-align: center; border: 1px solid rgba(249, 115, 22, 0.1); transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(249, 115, 22, 0.1);" class="summary-card">
        <div style="font-size: 1.8rem; font-weight: 700; color: #f97316; margin-bottom: 5px; line-height: 1.2;" class="summary-value">${r.toLocaleString()}</div>
        <div style="font-size: 0.85rem; color: #6c757d; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; line-height: 1.3;" class="summary-label">Recommended Budget</div>
      </div>
      <div style="background: rgba(255, 255, 255, 0.6); padding: 25px 20px; border-radius: 12px; text-align: center; border: 1px solid rgba(249, 115, 22, 0.1); transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(249, 115, 22, 0.1);" class="summary-card">
        <div style="font-size: 1.8rem; font-weight: 700; color: #f97316; margin-bottom: 5px; line-height: 1.2;" class="summary-value">${Math.round((e.marketing[0]+e.marketing[1])/2/((t+r)/2)*100)}%</div>
        <div style="font-size: 0.85rem; color: #6c757d; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; line-height: 1.3;" class="summary-label">Marketing %</div>
      </div>
      <div style="background: rgba(255, 255, 255, 0.6); padding: 25px 20px; border-radius: 12px; text-align: center; border: 1px solid rgba(249, 115, 22, 0.1); transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(249, 115, 22, 0.1);" class="summary-card">
        <div style="font-size: 1.8rem; font-weight: 700; color: #f97316; margin-bottom: 5px; line-height: 1.2;" class="summary-value">${Math.round((t+r)/2/o)}</div>
        <div style="font-size: 0.85rem; color: #6c757d; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; line-height: 1.3;" class="summary-label">Break Even Units</div>
      </div>
    `,c=document.getElementById("summaryGrid");c&&(c.innerHTML=u);const f=`
      <table style="width: 100%; border-collapse: collapse; border-radius: 8px; overflow: hidden; border: 1px solid rgba(249, 115, 22, 0.2); background: white;" class="cost-table">
        <thead>
          <tr>
            <th style="background: linear-gradient(135deg, rgba(249, 115, 22, 0.1), rgba(239, 68, 68, 0.1)); padding: 18px; text-align: left; font-weight: 600; color: #f97316; font-size: 0.95rem; border-bottom: 1px solid rgba(249, 115, 22, 0.2);" class="cost-table-header">Cost Category</th>
            <th style="background: linear-gradient(135deg, rgba(249, 115, 22, 0.1), rgba(239, 68, 68, 0.1)); padding: 18px; text-align: right; font-weight: 600; color: #f97316; font-size: 0.95rem; border-bottom: 1px solid rgba(249, 115, 22, 0.2);" class="cost-table-header">Estimated Range</th>
          </tr>
        </thead>
        <tbody>
          <tr style="background: white;" class="cost-table-row">
            <td style="padding: 18px; border-bottom: 1px solid rgba(249, 115, 22, 0.1); font-size: 0.95rem;" class="cost-table-cell">
              <div style="font-weight: 600; color: #0f172a; margin-bottom: 2px; font-size: 1rem;" class="cost-category">Product Development & Sourcing</div>
              <div style="font-size: 0.85rem; color: #6c757d; line-height: 1.4;" class="cost-description">Initial product development, supplier negotiations, samples</div>
            </td>
            <td style="padding: 18px; border-bottom: 1px solid rgba(249, 115, 22, 0.1); font-size: 0.95rem; text-align: right; font-weight: 600; color: #f97316; font-size: 1rem;" class="cost-range">${e.sourcing[0].toLocaleString()} - ${e.sourcing[1].toLocaleString()}</td>
          </tr>
          <tr style="background: white;" class="cost-table-row">
            <td style="padding: 18px; border-bottom: 1px solid rgba(249, 115, 22, 0.1); font-size: 0.95rem;" class="cost-table-cell">
              <div style="font-weight: 600; color: #0f172a; margin-bottom: 2px; font-size: 1rem;" class="cost-category">Initial Inventory</div>
              <div style="font-size: 0.85rem; color: #6c757d; line-height: 1.4;" class="cost-description">First production run, minimum order quantities</div>
            </td>
            <td style="padding: 18px; border-bottom: 1px solid rgba(249, 115, 22, 0.1); font-size: 0.95rem; text-align: right; font-weight: 600; color: #f97316; font-size: 1rem;" class="cost-range">${e.inventory[0].toLocaleString()} - ${e.inventory[1].toLocaleString()}</td>
          </tr>
          <tr style="background: white;" class="cost-table-row">
            <td style="padding: 18px; border-bottom: 1px solid rgba(249, 115, 22, 0.1); font-size: 0.95rem;" class="cost-table-cell">
              <div style="font-weight: 600; color: #0f172a; margin-bottom: 2px; font-size: 1rem;" class="cost-category">Shipping & Import Duties</div>
              <div style="font-size: 0.85rem; color: #6c757d; line-height: 1.4;" class="cost-description">International shipping, customs, warehousing</div>
            </td>
            <td style="padding: 18px; border-bottom: 1px solid rgba(249, 115, 22, 0.1); font-size: 0.95rem; text-align: right; font-weight: 600; color: #f97316; font-size: 1rem;" class="cost-range">${e.shipping[0].toLocaleString()} - ${e.shipping[1].toLocaleString()}</td>
          </tr>
          <tr style="background: white;" class="cost-table-row">
            <td style="padding: 18px; border-bottom: 1px solid rgba(249, 115, 22, 0.1); font-size: 0.95rem;" class="cost-table-cell">
              <div style="font-weight: 600; color: #0f172a; margin-bottom: 2px; font-size: 1rem;" class="cost-category">Website & Platform Setup</div>
              <div style="font-size: 0.85rem; color: #6c757d; line-height: 1.4;" class="cost-description">E-commerce platform, design, payment processing</div>
            </td>
            <td style="padding: 18px; border-bottom: 1px solid rgba(249, 115, 22, 0.1); font-size: 0.95rem; text-align: right; font-weight: 600; color: #f97316; font-size: 1rem;" class="cost-range">${e.platform[0].toLocaleString()} - ${e.platform[1].toLocaleString()}</td>
          </tr>
          <tr style="background: white;" class="cost-table-row">
            <td style="padding: 18px; border-bottom: 1px solid rgba(249, 115, 22, 0.1); font-size: 0.95rem;" class="cost-table-cell">
              <div style="font-weight: 600; color: #0f172a; margin-bottom: 2px; font-size: 1rem;" class="cost-category">Marketing & Advertising</div>
              <div style="font-size: 0.85rem; color: #6c757d; line-height: 1.4;" class="cost-description">Paid ads, content creation, influencer partnerships</div>
            </td>
            <td style="padding: 18px; border-bottom: 1px solid rgba(249, 115, 22, 0.1); font-size: 0.95rem; text-align: right; font-weight: 600; color: #f97316; font-size: 1rem;" class="cost-range">${e.marketing[0].toLocaleString()} - ${e.marketing[1].toLocaleString()}</td>
          </tr>
          <tr style="background: white;" class="cost-table-row">
            <td style="padding: 18px; border-bottom: 1px solid rgba(249, 115, 22, 0.1); font-size: 0.95rem;" class="cost-table-cell">
              <div style="font-weight: 600; color: #0f172a; margin-bottom: 2px; font-size: 1rem;" class="cost-category">Legal & Compliance</div>
              <div style="font-size: 0.85rem; color: #6c757d; line-height: 1.4;" class="cost-description">Business registration, trademarks, insurance</div>
            </td>
            <td style="padding: 18px; border-bottom: 1px solid rgba(249, 115, 22, 0.1); font-size: 0.95rem; text-align: right; font-weight: 600; color: #f97316; font-size: 1rem;" class="cost-range">${e.legal[0].toLocaleString()} - ${e.legal[1].toLocaleString()}</td>
          </tr>
          <tr style="background: white;" class="cost-table-row">
            <td style="padding: 18px; font-size: 0.95rem;" class="cost-table-cell">
              <div style="font-weight: 600; color: #0f172a; margin-bottom: 2px; font-size: 1rem;" class="cost-category">Working Capital</div>
              <div style="font-size: 0.85rem; color: #6c757d; line-height: 1.4;" class="cost-description">Cash buffer for operations, unexpected costs</div>
            </td>
            <td style="padding: 18px; font-size: 0.95rem; text-align: right; font-weight: 600; color: #f97316; font-size: 1rem;" class="cost-range">${e.working[0].toLocaleString()} - ${e.working[1].toLocaleString()}</td>
          </tr>
        </tbody>
      </table>
    `,g=document.getElementById("costTableContainer");g&&(g.innerHTML=f);const h=`
      <div style="background: linear-gradient(135deg, #f97316 0%, #ef4444 100%); color: white; border-radius: 16px; padding: 40px; text-align: center; box-shadow: 0 15px 35px rgba(249, 115, 22, 0.3); margin-bottom: 30px; position: relative; overflow: hidden;" class="total-investment-banner">
        <div style="font-size: 1.2rem; font-weight: 600; margin-bottom: 15px; opacity: 0.9; letter-spacing: 0.5px; text-transform: uppercase; position: relative; z-index: 1;">Total Launch Investment</div>
        <div style="font-size: 2.6rem; font-weight: 900; margin-bottom: 10px; text-shadow: 0 2px 4px rgba(0,0,0,0.1); line-height: 1; position: relative; z-index: 1;">${t.toLocaleString()} - ${r.toLocaleString()}</div>
        <div style="font-size: 1.1rem; opacity: 0.8; font-weight: 400; position: relative; z-index: 1;">Complete budget for `+l+` scale launch</div>
      </div>
    `,m=document.getElementById("totalSection");m&&(m.innerHTML=h);let d='<ul style="list-style: none; margin: 0; padding: 0;">';i.forEach(b=>{d+=`<li style="position: relative; padding-left: 28px; margin-bottom: 12px; color: #92400e; font-size: 0.95rem; line-height: 1.5;"><span style="position: absolute; left: 0; top: 0;">⚠️</span>${b}</li>`}),d+="</ul>";const p=document.getElementById("considerationsContent");p&&(p.innerHTML=d)}function k(){const e=document.getElementById("loading");e&&e.classList.add("show")}function z(){const e=document.getElementById("loading");e&&e.classList.remove("show")}function L(){const e=document.getElementById("results");e&&e.classList.add("show")}function M(e){const i=document.getElementById("errorMessage"),n=document.getElementById("error");i&&(i.textContent=e),n&&n.classList.add("show")}function S(){const e=document.getElementById("error");e&&e.classList.remove("show")}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",a):a();setTimeout(a,50);document.addEventListener("astro:page-load",a);
