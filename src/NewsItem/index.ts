import { XMLBuilder } from 'xmlbuilder2/lib/interfaces';

import { UrlItem } from '../UrlItem';
import { NewsElement } from './NewsElement';

export { NewsElement };

export class NewsItem extends UrlItem {
  public news?: NewsElement;

  constructor(props?: Partial<NewsItem>) {
    super(props);
    this.news = props?.news;
  }

  toXmlNode(doc: XMLBuilder) {
    const node = super.toXmlNode(doc);
    if (this.news) {
      this.news.toXmlNode(node);
    }

    return node;
  }
}
