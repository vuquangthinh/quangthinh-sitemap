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

import { create } from 'xmlbuilder2';
import { XMLBuilder } from 'xmlbuilder2/lib/interfaces';

import { SITEMAP_NS } from './constants';
import { UrlItem } from './UrlItem';

export { UrlItem };
export * from "./NewsItem";

export class SiteMap<T extends UrlItem = UrlItem> {
  private doc: XMLBuilder;
  private root: XMLBuilder;

  constructor() {
    this.doc = create({
      version: "1.0",
    });

    this.root = this.doc.ele("urlset", {
      xmlns: SITEMAP_NS,
      encoding: 'UTF-8'
    });
  }

  toString() {
    return this.doc
      .end({
        prettyPrint: true,
      })
      .toString();
  }

  add(news: T) {
    news.toXmlNode(this.root);
    return this;
  }
}
