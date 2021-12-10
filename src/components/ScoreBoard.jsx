import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { data } from './Data.js';

const ScoreBoard = ( { mode } ) => {

    let [initialData, setInitialData] = useState([]);

    useEffect( () => {
        getInitialData();
    },[])
    
    const getInitialData = () => {

          setInitialData(data.sort(function (a, b) { return b.score - a.score }));
    }


    return (
        <>
            <div className="container">
            <h3 className="text-center">ScoreBoard</h3>
            <hr className="w-50 fw mx-auto" />
                <table className="table table-bordered table-responsive text-center mt-4">
                    <thead className={` bg-${mode==='light' ? 'dark' : 'light'} text-${mode==='light' ? 'light' : 'dark'}`}>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Score</th>
                            <th>Code</th>
                        </tr>    
                    </thead>
                    <tbody className={`text-${mode==='light' ? 'dark' : 'light'}`}>
                        {
                            initialData.map( (curElem, Indx) => {
                                return(
                                    <tr key={ curElem.code } className={`${mode==='light' ? 'hoverRowLight' : 'hoverRowDark'}`}>
                                        <td>{Indx+1}</td>
                                        <td>{curElem.name}</td>
                                        <td>{curElem.score}</td>
                                        <td>{curElem.code}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ScoreBoard;
