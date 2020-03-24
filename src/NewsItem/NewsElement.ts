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

  toXmlNode(doc: Document, prefix: string = "news"): Element {
    const element = doc.createElementNS(NewsElement.NS, prefix + ":news");
    if (this.publication) {
      const pubNode = doc.createElementNS(NewsElement.NS, prefix + ":publication");
      if (this.publication.name) {
        const name = doc.createElementNS(NewsElement.NS, "name");
        name.nodeValue = this.publication.name;
        pubNode.appendChild(name);
      }
      if (this.publication.language) {
        const language = doc.createElementNS(NewsElement.NS, "name");
        language.nodeValue = this.publication.language;
        pubNode.appendChild(language);
      }

      if (this.publication_date) {
        const dateNode = doc.createElementNS(NewsElement.NS, "publication_date");
        let dateValue: any = this.publication_date;
        if (this.publication_date instanceof Date) {
          dateValue = this.publication_date.toISOString();
        }

        dateNode.appendChild(doc.createTextNode(dateValue));
        pubNode.appendChild(dateNode);
      }

      if (this.title) {
        const titleNode = doc.createElementNS(NewsElement.NS, "title");
        titleNode.appendChild(doc.createTextNode(this.title));
        pubNode.appendChild(titleNode);
      }

      element.appendChild(pubNode);
    }

    return element;
  }
}
