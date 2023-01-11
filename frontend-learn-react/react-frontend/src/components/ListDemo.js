function Item(props) {
  return <div>{props.item}</div>;
}

export default function ListDemo() {
  let items = ["task1", "task2", "task3"];
  return (
    <div>
      {items.map((item: string, index: number) => 
        <Item key={index} item={item} />
      )}
    </div>
  );
}
