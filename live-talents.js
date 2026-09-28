// يستبدل بيانات العملاء الثابتة (data.js) ببيانات Supabase لو موجودة.
// لو Supabase مش متاح أو فاضي، الموقع يكمل بـ data.js زي ما هو.
(function(){
  var URL = 'https://piygmxdustucvdoieuuz.supabase.co';
  var KEY = 'sb_publishable_oSuJVGLZN-hVCp1cyjpNKw_bnyFuC5s';
  try{
    var x = new XMLHttpRequest();
    x.open('GET', URL + '/rest/v1/talents?select=*&order=created_at.asc', false); // synchronous عشان الصفحات تلاقي TALENTS جاهزة
    x.setRequestHeader('apikey', KEY);
    x.setRequestHeader('Authorization', 'Bearer ' + KEY);
    x.send();
    if(x.status !== 200) return;
    var rows = JSON.parse(x.responseText);
    if(!rows.length) return;

    var base = {}, order = {};
    TALENTS.forEach(function(t, i){ base[t.slug] = t; order[t.slug] = i; });

    var list = rows.map(function(r){
      var b = base[r.slug] || {};
      return Object.assign({}, b, {
        slug: r.slug,
        name: r.name, nameAr: r.name_ar || r.name,
        role: r.role || b.role || '', roleAr: r.role_ar || r.role || b.roleAr || '',
        bioEn: r.bio || b.bioEn || '', bio: r.bio_ar || r.bio || b.bio || '',
        photo: r.photo_url || b.photo || ''
      });
    });
    // الترتيب الأصلي أولاً، والعملاء الجدد في الآخر
    list.sort(function(a, b){
      var ia = a.slug in order ? order[a.slug] : 9999, ib = b.slug in order ? order[b.slug] : 9999;
      return ia - ib;
    });
    TALENTS.length = 0;
    list.forEach(function(t){ TALENTS.push(t); });

    if(typeof TALENT_SOCIALS !== 'undefined'){
      rows.forEach(function(r){ if(r.socials) TALENT_SOCIALS[r.slug] = r.socials; });
    }
  }catch(e){ console.warn('live-talents: using data.js', e); }
})();
