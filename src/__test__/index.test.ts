import { SiteMap } from '../';
import { NewsItem } from '../NewsItem';
import { NewsElement } from '../NewsItem/NewsElement';
import { UrlItem } from '../UrlItem';

test("Test", () => {
  expect("OK").toBe("OK");

  const doc = new SiteMap();
  doc
    .add(
      new UrlItem({
        loc: "http://www.example.org/business/article55.html",
      })
    )
    .add(
      new UrlItem({
        loc: "http://www.example.org/business/article55.html",
      })
    )
    .add(
      new NewsItem({
        loc: "http://www.example.org/business/article55.html",
        news: new NewsElement({
          publication: {
            name: "quangthinh",
            language: "vi",
          },
          publication_date: new Date(),
        }),
      })
    )
    .add(
      new NewsItem({
        loc: "http://www.example.org/business/article55.html",
        news: new NewsElement({
          publication: {
            name: "quangthinh",
            language: "vi",
          },
          publication_date: "2012-11-10",
          title: "Hello",
        }),
      })
    );

  console.log("--------------------------------");
  console.log(doc.toString());
  console.log("--------------------------------");
});
