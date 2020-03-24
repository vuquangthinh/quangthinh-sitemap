import { XMLBuilder } from 'xmlbuilder2/lib/interfaces';

export class UrlItem {
  public loc?: string;

  constructor(props?: Partial<UrlItem>) {
    Object.assign(this, props);
  }

  toXmlNode(doc: XMLBuilder) {
    const node = doc.ele("url");

    if (this.loc) {
      node.ele("loc").txt(this.loc);
    }

    return node;
  }
}
