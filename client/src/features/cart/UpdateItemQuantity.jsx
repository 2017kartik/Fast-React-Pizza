import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItem, increaseItem } from "./cartSlice";

export default function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button type="rounded" onClick={() => dispatch(decreaseItem(pizzaId))}>
        -
      </Button>
      <p className="text-sm text-medium">{currentQuantity}</p>
      <Button type="rounded" onClick={() => dispatch(increaseItem(pizzaId))}>
        +
      </Button>
    </div>
  );
}
