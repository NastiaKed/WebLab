import {useDispatch} from "react-redux";
import { actionsType } from "../../../Shopping/shopping";

export const CartItem = (props) => {
    const dispatch = useDispatch();

    function deleteFromCart() {
        dispatch({
            type: actionsType.deleteFromCart,
            bookToDelete: props.table
        })
    }

    function addSameItem() {
        dispatch({
            type: actionsType.addSameItem,
            bookToUpdate: props.table
        })
    }

    function deleteSameItem() {
        dispatch({
            type:actionsType.deleteSameItem,
            bookToUpdate:props.table
        })
    }

    return (
        <div >
            <div>
                <img src={props.table.image} alt={"cart"}/>
                <div>
                    <h3>{props.table.title}</h3>
                    <p>{props.table.type}</p>
                </div>
            </div>
            <div >
                <button onClick={deleteSameItem}>
                </button>
                <p>
                    <strong>{props.book.countOfSameBooks}</strong>
                </p>
                <button onClick={addSameItem}>
                </button>
            </div>
            <div >
                <p> {props.table.price + "$"}</p>
                <button onClick={deleteFromCart}>
                </button>
            </div>
        </div>
    )
}