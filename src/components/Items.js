import Item from "./Item";
function Items({filteredItems}){
    return (
        <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    )

}
export default Items