import { XMLBuilder } from 'xmlbuilder2/lib/interfaces';

export class NewsElement {
  static NS = "http://www.google.com/schemas/sitemap-news/0.9";

  public title?: string;

  public publication?: {
    name?: string;
    language?: string;
  };

  public publication_date?: Date | string;

  constructor(props?: Partial<NewsElement>) {
    Object.assign(this, props);
  }

  toXmlNode(doc: XMLBuilder, prefix: string = "news"): XMLBuilder {
    doc.root().att("xmlns:" + prefix, NewsElement.NS);
    const element = doc.ele(prefix + ":news");

    if (this.publication) {
      const pubNode = element.ele(prefix + ":publication");
      if (this.publication.name) {
        pubNode.ele(prefix + ":name").txt(this.publication.name);
      }
      if (this.publication.language) {
        pubNode.ele(prefix + ":language").txt(this.publication.language);
      }

      if (this.publication_date) {
        let dateValue: any = this.publication_date;

        if (this.publication_date instanceof Date) {
          dateValue = this.publication_date.toISOString();
        }

        element.ele(prefix + ":publication_date").txt(dateValue);
      }

      if (this.title) {
        element.ele(prefix + ":title").txt(this.title);
      }
    }

    return element;
  }
}
