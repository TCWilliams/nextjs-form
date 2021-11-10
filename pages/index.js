export default function Home({ data }) {

  return (
    <div>
      <form>
      {data.map((item, index) => (
        <div key={`${item}~${index}`}>
          <label htmlFor="name"></label>
          Name field
          <input type="text" id="name" placeholder="Your name" required/>
        </div>
      ))}
    </form>
    <a href="http://localhost:3000?increment=1">Add item</a>
  </div>
  )
}

export async function getServerSideProps({ query }) {
  let url = query.increment ?
    `http://localhost:3000/api/addField?increment=${query.increment}` :
    'http://localhost:3000/api/addField'

  const res = await fetch(url)
  const data = await res.json()

  return { props: { data } };
}
