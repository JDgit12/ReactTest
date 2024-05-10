export default function ProductReducer({products,length}){

    return(
        <div>
            <h3>Total Products: {products.length}!!</h3>
            <span>Remaining Products {products.length-length}</span>
        </div>
    )
}