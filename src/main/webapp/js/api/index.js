import { v4 } from 'node-uuid'

export const articles = [
  {
    id: v4(),
    title: "Batman",
    content: "The goddamn Batman wears leatherpants and a utility belt",
    published: "2010-01-02"
  }, {
    id: v4(),
    title: "Spider-man",
    content: "Spider-man, Spider-man, does whatever a spider can",
    published: "2016-03-04"
  }, {
    id: v4(),
    title: "Blahblah",
    content: "BlahblahBlahblahBlahblahBlahblahBlahblahBlahblahBlahblahBlahblahBlahblahBlahblah",
    published: "2016-01-04"
  }, {
    id: v4(),
    title: "Le passage de Lorem Ipsum standard, utilisé depuis 1500",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ",
    published: "2016-01-04"
  }, {
    id: v4(),
    title: "Section 1.10.32 du 'De Finibus Bonorum et Malorum' de Ciceron (45 av. J.-C.)",
    content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
    published: "2016-01-04"
  }
]

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms))

export const fetchArticles = (pageNumber, pageSize) => {
  const first = (pageNumber - 1) * pageSize
  const last = pageNumber * pageSize

  delay(500)
    .then(() => articles.slice(first, last))
}
