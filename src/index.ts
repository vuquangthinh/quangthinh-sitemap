// <?xml version="1.0" encoding="UTF-8"?>
// <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
//         xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
//   <url>
//     <loc>http://www.example.org/business/article55.html</loc>
//     <news:news>
//     <news:publication>
//       <news:name>The Example Times</news:name>
//       <news:language>en</news:language>
//     </news:publication>
//     <news:publication_date>2008-12-23</news:publication_date>
//       <news:title>Companies A, B in Merger Talks</news:title>
//     </news:news>
//   </url>
// </urlset>

import { SITEMAP_NS } from './constants';
import { UrlItem } from './UrlItem';

export class SiteMap<T extends UrlItem = UrlItem> {
  private doc: Document;

  constructor() {
    this.doc = document.implementation.createDocument(SITEMAP_NS, "urlset", null);
  }

  toString() {
    return new XMLSerializer().serializeToString(this.doc);
  }

  add(news: T) {
    const node = news.toXmlNode(this.doc);
    this.doc.documentElement.appendChild(node);
    return this;
  }
}
