import React from 'react'
import { useSelector } from 'react-redux'

function ScoreArea() {
    const isFinish = useSelector(state => state.words.isFinish)
    const correct = useSelector(state => state.words.correct)
    const inCorrect = useSelector(state => state.words.inCorrect)
    const ticknumb = useSelector(state => state.words.ticknumb)
    const inCorTick = useSelector(state => state.words.inCorTick)
    const corTick = useSelector(state => state.words.corTick)
    return (
        <>
            {
                isFinish && <div className='ScoreArea'>
                    <div className='CardArea '>
                        <h3 className='bg-info text-center fw-bold text-light m-0'>Score</h3>
                        <div className='bg-light text-success h-25 text-end pe-3 fs-1 border-bottom border-2 border-dark pt-3'>
                            {correct * 5 - inCorrect * 2}
                        </div>
                        <div className='bg-light d-flex fs-4 px-3  border-bottom border-2 border-dark '>
                            <div className='col-8'>
                                Tık Vuruşu
                            </div>
                            <div className='col-4 text-end fs-5 fw-bolder'>
                                (<span className='text-success fs-6'>{corTick}</span>/<span className='text-danger fs-6'>{inCorTick}</span>)  {ticknumb}
                            </div>
                        </div>
                        <div className='bg-light d-flex fs-4 px-3  border-bottom border-2 border-dark '>
                            <div className='col-8'>
                                Doğruluk
                            </div>
                            <div className='col-4 text-end fs-5 fw-bolder'>
                                % {Math.round((correct * 100) / (correct + inCorrect))}
                            </div>
                        </div>
                        <div className='bg-light d-flex fs-4 px-3  border-bottom border-2 border-dark '>
                            <div className='col-8'>
                                Doğru Kelime
                            </div>
                            <div className='col-4 text-end fs-5 fw-bolder text-success'>
                                {correct}
                            </div>
                        </div>
                        <div className='bg-light d-flex fs-4 px-3  border-bottom border-2 border-dark '>
                            <div className='col-8'>
                                Yanlış  Kelime
                            </div>
                            <div className='col-4 text-end fs-5 fw-bolder text-danger'>
                                {inCorrect}
                            </div>
                        </div>
                        <div className='text-center'>
                            <div className='btn btn2 px-5 mt-2 border border-3 border-secondary ' onClick={() => window.location.reload()}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="fw-bolder bi bi-arrow-clockwise" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                                </svg>
                            </div>
                        </div>

                    </div>
                </div>

            }
        </>
    )
}

export default ScoreArea