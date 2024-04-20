import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../redux/features/counterSlice";

const Home = () => {
  const count = useSelector((state) => state.counter.value);
  const isDecrementTrue = useSelector((state) => state.counter.isDecrement);
  const dispatch = useDispatch();

  
  return (
    <div className="w-fit border rounded-2xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1 p-5">
      <p className="mx-auto text-4xl font-semibold pb-5 text-center">{count}</p>
      <button onClick={() => dispatch(increment())} className="mx-5 p-2 border rounded-md px-5 hover:bg-blue-500 hover:text-white font-semibold text-gray-500">Increment</button>
      <button onClick={() => dispatch(decrement())} disabled={!isDecrementTrue} className={`mx-5 p-2 border rounded-md px-5 font-semibold text-gray-500 ${!isDecrementTrue ? "bg-red-500 cursor-not-allowed text-white" : " hover:bg-blue-500 hover:text-white"}`}>decrement</button>
    </div>
  )
}

export default Home