import {v4} from 'node-uuid'

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

const fetchContent = (contentCount) =>
  fetch(`https://baconipsum.com/api/?type=meat-and-filler&paras=${contentCount}`)
    .then(resp => resp.json())

const fetchTitle = (promise) =>
  promise
    .then(() => fetch("https://baconipsum.com/api/?type=meat-and-filler&sentences=1"))
    .then(resp => resp.json())

const fetchTitles = (fetchContent, titlesCount) => {
  const recurse = (promises, count) => {
    if (count == 0) return promises
    else {
      const [head, ] = promises
      return recurse([fetchTitle(head), ...promises], count - 1)
    }
  }
  const [, ...res]  = recurse([fetchContent], titlesCount).reverse()
  return res
}

export const fetchArticles = (pageNumber, pageSize) => {
  const first = (pageNumber - 1) * pageSize
  const last = pageNumber * pageSize

  const missing = last - articles.length

  console.log("missing", missing)

  if (missing > 0) {
    const contentPromise = fetchContent(missing)
    const titlesPromises = fetchTitles(contentPromise, missing)

    return Promise.all([contentPromise, ...titlesPromises])
      .then(([contents, ...titles]) => {
        console.log("spreading", arguments, "lol")

        contents
          .map(content => ({content}))
          .map((art, dx) => ({
            ...art,
            title: titles[dx]
          }))
          .map(art => ({
            ...art,
            id: v4(),
            published: new Date().toISOString()
          }))
          .forEach(art => articles.push(art))
      }, (err) => console.log("error", err))
      .then(() => articles.slice(first, last))
  }

  return new Promise(r => r()).then(() => articles.slice(first, last))
}
