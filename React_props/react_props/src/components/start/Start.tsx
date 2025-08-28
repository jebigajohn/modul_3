import Item from "../item/Item"

const Start = () => {
  return (
    <>
      <section className="start">
        <h2>Not sure where to Start?</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, in!</p>
        <div className="box">
          <Item title="Product 1" description="Das ist unser erstes Produkt" bg="red" />

          <Item title="Product 2" description="Das ist unser zweites Produkt" bg="blue" />
        </div>
      </section>
    </>
  )
}

export default Start
