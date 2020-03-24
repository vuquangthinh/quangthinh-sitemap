import { SITEMAP_NS } from './constants';

export class UrlItem {
  public loc?: string;

  constructor(props?: Partial<UrlItem>) {
    Object.assign(this, props);
  }

  toXmlNode(doc: Document) {
    const node = doc.createElementNS(SITEMAP_NS, "url");

    if (this.loc) {
      const item = doc.createElementNS(SITEMAP_NS, "loc");
      item.appendChild(doc.createTextNode(this.loc));
      node.appendChild(item);
    }

    return node;
  }
}
