import { SITEMAP_NS } from '../constants';
import { UrlItem } from '../UrlItem';
import { NewsElement } from './NewsElement';

export class NewsItem extends UrlItem {
  public news?: NewsElement;

  constructor(props?: Partial<NewsItem>) {
    super(props);
    this.news = props?.news;
  }

  toXmlNode(doc: Document) {
    const node = super.toXmlNode(doc);
    if (this.news) {
      node.appendChild(this.news.toXmlNode(doc));
    }

    return node;
  }
}
