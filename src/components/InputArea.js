import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { downTime, increWordIndex, HandleWords } from "../redux/wordSlicer"
function InputArea() {
    const timer = useSelector(state => state.words.timer);
    const time = useSelector(state => state.words.time);
    const [start, setStart] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        if (timer < 2) setStart(false)
        if (start) {
            setTimeout(() => dispatch(downTime()), 1000)
        }
    }, [start, timer, dispatch])
    function increIndex(e) {
        if (e.target.value[e.target.value.length - 1] === " ") {
            dispatch(increWordIndex());
            e.target.value = ""
        }
    }
    function Handlekeyboard(e) {
        dispatch(HandleWords(e.target.value))
        setStart(true);
    }

    return (
        <div className='m-auto keyboardArea row  p-0 mt-2 mb-4 align-items-center'>
            <div className='col-10  m-0 p-0 text-center'>
                <input type="text" name="keyboard" id="keyboard" onKeyUpCapture={(e) => increIndex(e)} autoFocus className='input' autoComplete="off" disabled={timer < 1 && !start} onChange={(e) => Handlekeyboard(e)} />
            </div>
            <div className='d-flex col-2'>
                <div className='btn btn1 ms-auto bg-secondary rounded border border-3  border-dark fw-bolder' >{time}</div>
                <button className='btn btn2 ms-3 px-3 border border-3 border-secondary' onClick={() => window.location.reload()} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="fw-bolder bi bi-arrow-clockwise" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                    </svg>
                </button>
            </div>
        </div >
    )
}

export default InputArea