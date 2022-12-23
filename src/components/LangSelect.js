import { changeLang } from "../redux/wordSlicer"
import { useDispatch, useSelector } from "react-redux";
import { BsGithub } from 'react-icons/bs';
import { AiFillCode,AiFillLinkedin } from 'react-icons/ai';



function LangSelect() {
    const dispatch = useDispatch();
    const timer = useSelector(state => state.words.timer)
    return (
        <>
        <div className='mt-4 m-auto mb-3 text-end langArea'>
            <a className="me-5" href="https://github.com/cryptobcu">
                <BsGithub size={30} />
            </a>
            <a className="me-5" href="https://github.com/cryptobcu/typing-speed-app">
                <AiFillCode size={30} />
            </a>
            <a className="me-5" href="https://www.linkedin.com/in/bekir-uyumaz/">
                <AiFillLinkedin size={30} />
            </a>
            <select defaultValue="turkish" className="w-25 bg-success fw-bolder text-light rounded" onChange={(e) => dispatch(changeLang(e.target.value))} disabled={timer < 60} >
                <option value="turkish">Türkçe</option>
                <option value="english">English</option>
            </select>
        </div>
        </>
    )
}

export default LangSelect