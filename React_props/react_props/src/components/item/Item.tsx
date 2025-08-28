interface ItemProps {
  title: string
  description: string
  bg?: string
}

// ? Wenn ich Daten vom Elternkomponente zum Kindkomponente schicken möchte, muss ich meine Komponente zu einer React.FC Komponente typisieren. Zudem muss man ein Interface schreiben, welches die Daten die in die Komponente rein kommen beschreibt

// ? Über den Begriff "props" kann ich dann final auf die Daten zugreifen (Objekt)

const Item: React.FC<ItemProps> = (props) => {
  // console.log("title", props.title)
  // console.log("desc", props.description)
  return (
    <>
      <div className="item" style={{ backgroundColor: `${props.bg}` }}>
        {/* " die {} benötigen wir damit wir JS/TS in HTML benutzen können, innerHTML etc gibt es nicht mehr in React"*/}
        <h5>Title{props.title}</h5>
        <p>desc: {props.description}</p>
      </div>
    </>
  )
}

export default Item
