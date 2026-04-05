import { getLang } from '../state.js';
import { blogPosts } from '../data/blogPosts.js';
import { blogPostsRu } from '../data/blogPostsRu.js';
import { blogPostsRu2 } from '../data/blogPostsRu2.js';

// Merge Russian translations
var allRu = Object.assign({}, blogPostsRu, blogPostsRu2);

function getRuPost(id) {
  return allRu[id] || null;
}

function getPost(p) {
  var E = getLang() === 'ru';
  var ru = E ? getRuPost(p.id) : null;
  return {
    id: p.id,
    title: ru ? ru.title : p.title,
    category: ru ? ru.category : p.category,
    readTime: ru ? ru.readTime : p.readTime,
    date: p.date,
    image: p.image,
    excerpt: ru ? ru.excerpt : p.excerpt,
    metaDesc: ru ? ru.metaDesc : p.metaDesc,
    content: ru ? ru.content : p.content,
    keywords: p.keywords
  };
}

function formatDate(dateStr) {
  var E = getLang() === 'ru';
  var d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString(E ? 'ru-RU' : 'en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

export function renderBlog() {
  var E = getLang() === 'ru';
  var cards = blogPosts.map(function(p) {
    var lp = getPost(p);
    return '<article class="sv anim" style="cursor:pointer" data-nav="blog/' + lp.id + '">' +
      '<div class="sv-img"><img loading="lazy" src="' + lp.image + '" alt="' + lp.title.replace(/'/g, '&#39;') + '"></div>' +
      '<div class="sv-b">' +
        '<div style="display:flex;gap:8px;margin-bottom:12px;align-items:center;flex-wrap:wrap">' +
          '<span style="font-size:11px;font-weight:600;background:var(--c1l);color:var(--c1);padding:4px 10px;border-radius:100px">' + lp.category + '</span>' +
          '<span style="font-size:11px;color:var(--g500)">' + formatDate(lp.date) + '</span>' +
          '<span style="font-size:11px;color:var(--g500)">' + lp.readTime + (E ? '' : ' read') + '</span>' +
        '</div>' +
        '<div class="sv-t">' + lp.title + '</div>' +
        '<p class="sv-p">' + lp.excerpt + '</p>' +
      '</div>' +
    '</article>';
  }).join('');

  return '<div style="padding:140px 0 80px;background:linear-gradient(135deg,var(--dk),#1f2937)">' +
    '<div class="con" style="text-align:center">' +
      '<div class="stag" style="color:var(--c1)">' + (E ? '\u0411\u043b\u043e\u0433' : 'Blog') + '</div>' +
      '<h1 style="font-family:var(--fd);font-size:clamp(36px,5vw,52px);color:#fff">' + (E ? '\u041f\u043e\u043b\u0435\u0437\u043d\u043e\u0435 \u0434\u043b\u044f \u043f\u0430\u0440\u0442\u043d\u0451\u0440\u043e\u0432' : 'Insights for Travel Partners') + '</h1>' +
      '<p style="color:rgba(255,255,255,.6);font-size:17px;margin-top:16px;max-width:600px;margin-left:auto;margin-right:auto">' + (E ? '\u0422\u0440\u0435\u043d\u0434\u044b, \u043c\u0430\u0440\u0436\u0438\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0438 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0438 \u0434\u043b\u044f \u0442\u0443\u0440\u0430\u0433\u0435\u043d\u0442\u0441\u0442\u0432' : 'Trends, margins & strategies for travel agencies') + '</p>' +
    '</div>' +
  '</div>' +
  '<section class="sec"><div class="con"><div class="sgrid">' + cards + '</div></div></section>';
}

export function renderBlogPost(postId) {
  var E = getLang() === 'ru';
  var rawPost = blogPosts.find(function(p) { return p.id === postId; });

  if (!rawPost) {
    return '<section style="min-height:80vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:40px 20px">' +
      '<div>' +
        '<h1 style="font-size:64px;font-family:var(--fh);color:var(--c1);margin:0;line-height:1">404</h1>' +
        '<p style="font-size:24px;color:var(--dk);margin:16px 0 8px;font-family:var(--fd)">' + (E ? '\u0421\u0442\u0430\u0442\u044c\u044f \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430' : 'Article not found') + '</p>' +
        '<a data-nav="blog" style="display:inline-block;padding:14px 32px;background:var(--c1);color:#fff;border-radius:100px;font-weight:600;cursor:pointer;font-family:var(--fb);margin-top:24px">' + (E ? '\u0412\u0441\u0435 \u0441\u0442\u0430\u0442\u044c\u0438' : 'All articles') + '</a>' +
      '</div>' +
    '</section>';
  }

  var post = getPost(rawPost);

  // Get related posts (same category first, then recent, exclude current)
  var related = blogPosts.filter(function(p) { return p.id !== post.id && p.category === rawPost.category; });
  if (related.length < 3) {
    var others = blogPosts.filter(function(p) { return p.id !== post.id && p.category !== rawPost.category; });
    related = related.concat(others);
  }
  related = related.slice(0, 3).map(function(r) { return getPost(r); });

  var relatedHtml = related.map(function(r) {
    return '<article class="sv anim" style="cursor:pointer" data-nav="blog/' + r.id + '">' +
      '<div class="sv-img"><img loading="lazy" src="' + r.image + '" alt="' + r.title.replace(/'/g, '&#39;') + '"></div>' +
      '<div class="sv-b">' +
        '<div style="display:flex;gap:8px;margin-bottom:12px;align-items:center">' +
          '<span style="font-size:11px;font-weight:600;background:var(--c1l);color:var(--c1);padding:4px 10px;border-radius:100px">' + r.category + '</span>' +
          '<span style="font-size:11px;color:var(--g500)">' + r.readTime + '</span>' +
        '</div>' +
        '<div class="sv-t">' + r.title + '</div>' +
      '</div>' +
    '</article>';
  }).join('');

  return '' +
    // Hero
    '<div style="position:relative;min-height:480px;display:flex;align-items:flex-end;overflow:hidden">' +
      '<div style="position:absolute;inset:0;background-image:url(\'' + post.image + '\');background-size:cover;background-position:center"></div>' +
      '<div style="position:absolute;inset:0;background:linear-gradient(0deg,rgba(0,0,0,.75),rgba(0,0,0,.2) 50%)"></div>' +
      '<div style="position:relative;z-index:2;max-width:var(--mx);width:100%;margin:0 auto;padding:100px 40px 48px">' +
        '<div style="display:flex;gap:12px;align-items:center;margin-bottom:16px;flex-wrap:wrap">' +
          '<span style="font-size:12px;font-weight:600;background:var(--c1);color:#fff;padding:5px 14px;border-radius:100px">' + post.category + '</span>' +
          '<span style="font-size:13px;color:rgba(255,255,255,.7)">' + formatDate(post.date) + '</span>' +
          '<span style="font-size:13px;color:rgba(255,255,255,.7)">' + post.readTime + (E ? '' : ' read') + '</span>' +
        '</div>' +
        '<h1 style="font-family:var(--fd);font-size:clamp(28px,4vw,44px);color:#fff;line-height:1.2;max-width:800px">' + post.title + '</h1>' +
      '</div>' +
    '</div>' +
    // Breadcrumb
    '<div style="background:#fff;border-bottom:1px solid var(--g200);padding:14px 0">' +
      '<div class="con" style="font-size:13px;color:var(--g500)">' +
        '<a data-nav="home" style="cursor:pointer;color:var(--g500)">' + (E ? '\u0413\u043b\u0430\u0432\u043d\u0430\u044f' : 'Home') + '</a>' +
        ' <span style="margin:0 8px">/</span> ' +
        '<a data-nav="blog" style="cursor:pointer;color:var(--g500)">' + (E ? '\u0411\u043b\u043e\u0433' : 'Blog') + '</a>' +
        ' <span style="margin:0 8px">/</span> ' +
        '<span style="color:var(--dk)">' + post.category + '</span>' +
      '</div>' +
    '</div>' +
    // Article body
    '<section class="sec" style="padding:60px 0 40px">' +
      '<div class="con">' +
        '<div class="blog-article">' +
          post.content +
        '</div>' +
      '</div>' +
    '</section>' +
    // CTA
    '<section class="blog-cta">' +
      '<div class="con" style="text-align:center">' +
        '<div class="stag" style="color:var(--c1)">' + (E ? '\u041f\u0430\u0440\u0442\u043d\u0451\u0440\u0441\u0442\u0432\u043e' : 'Partnership') + '</div>' +
        '<h2 style="font-family:var(--fd);font-size:clamp(28px,3.5vw,40px);color:var(--dk);margin-bottom:16px">' + (E ? '\u0421\u0442\u0430\u043d\u044c\u0442\u0435 \u043f\u0430\u0440\u0442\u043d\u0451\u0440\u043e\u043c Desera Travel' : 'Become a Desera Travel Partner') + '</h2>' +
        '<p style="font-size:17px;color:var(--g500);max-width:560px;margin:0 auto 32px;line-height:1.7">' + (E ? '11+ \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0439. \u041f\u0440\u044f\u043c\u044b\u0435 \u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442\u044b. \u041e\u0442\u0432\u0435\u0442 \u0437\u0430 2 \u0447\u0430\u0441\u0430. \u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 24/7.' : '11+ destinations. Direct supplier contracts. 2-hour response guarantee. 24/7 on-ground support.') + '</p>' +
        '<a data-nav="partner" class="bp" style="text-decoration:none">' + (E ? '\u0421\u0442\u0430\u0442\u044c \u043f\u0430\u0440\u0442\u043d\u0451\u0440\u043e\u043c \u2192' : 'Become a partner \u2192') + '</a>' +
      '</div>' +
    '</section>' +
    // Related articles
    '<section class="sec" style="background:var(--g50)">' +
      '<div class="con">' +
        '<div class="sh">' +
          '<div class="stag">' + (E ? '\u0427\u0438\u0442\u0430\u0439\u0442\u0435 \u0442\u0430\u043a\u0436\u0435' : 'More Articles') + '</div>' +
          '<h2 class="stitle">' + (E ? '\u0414\u0440\u0443\u0433\u0438\u0435 \u043f\u043e\u043b\u0435\u0437\u043d\u044b\u0435 \u0441\u0442\u0430\u0442\u044c\u0438' : 'Related Insights') + '</h2>' +
        '</div>' +
        '<div class="sgrid">' + relatedHtml + '</div>' +
      '</div>' +
    '</section>';
}
