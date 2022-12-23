import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getWords } from '../redux/wordSlicer'

function WordsArea() {
    const lang = useSelector(state => state.words.lang);
    const words = useSelector(state => state.words.items);
    const wordindexnumber = useSelector(state => state.words.wordindexnumber);
    const [grup, setGrup] = useState([]);
    const [num, setNum] = useState(0);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getWords(lang));
    }, [lang])
    useEffect(() => {
        if (wordindexnumber % 15 === 0) {
            setNum(wordindexnumber)
        }
        setGrup(words.slice(num, 15 + num))
    }, [words, num])
    return (
        <div className='wordsArea m-auto mt-4 p-3' >
            <p className='w-100 h-100   parag text-center'>
                {
                    grup.map((k, index) => {
                        return (
                            <span key={index} className={`me-2 fs-4  ${k.status} ${k.nowWords ? "set" : null}`} > {k.word}</span>
                        )
                    })
                }
            </p>


        </div >
    )
}

export default WordsArea