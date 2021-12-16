import React from 'react'
import com from './com.PNG'
import rgb from './rgb.PNG'
import goo from './goo.PNG'
import mov from './mov.PNG'
import ne from './ne.PNG'
import crud from './crud.PNG'

const Myport =()=>{
    return(
        <div className="portfolio">
            <div className="container text-light">
                <h1 className="text-warning">PORTFOLIO</h1>
                <div className="row mywork my-5">
                    <div className="col-md-6">
                        <a href="http://github.com/marthacode/Online-Store">
                            <img className="img-fluid" src={com} alt="my-online-store" /></a>
                            <p className="mb-5">An online store built with React and Bootstrap</p>
                    </div>
                    <div className="col-md-6">
                        <a href="http://github.com/marthacode/Popular-Movies-with-react">
                            <img className="img-fluid" src={mov} alt="my-online-store" /></a>
                            <p className="mb-5">A Popular Movies App built with React and Bootstrap</p>
                    </div>
                </div>
                <div className="row mywork mt-5">
                    <div className="col-md-6">
                        <a href="https://github.com/Marthacode/Color-Game">
                            <img className="img-fluid" src={rgb} alt="javascript-game" /></a>
                            <p className="mb-5">A Color game built with JavaScript</p>
                    </div>
                    <div className="col-md-6">
                        <a href="http://github.com/marthacode/React-Hooks-news-app">
                            <img className="img-fluid" src={ne} alt="my-online-store" /></a>
                            <p className="mb-5">A News App built with React and CSS</p>
                    </div>
                </div>
                <div className=" row mywork mt-5">
                    <div className="col-md-6">
                        <a href="https://github.com/Marthacode/Google-Clone">
                            <img className="img-fluid" src={goo} alt="my-online-store" /></a>
                            <p className="mb-5">Google Clone built with HTML, CSS and Bootstrap</p>
                    </div>
                    <div className="col-md-6">
                        <a href="https://github.com/Marthacode/React-Crud-App">
                            <img className="img-fluid" src={crud} alt="my-online-store" /></a>
                            <p className="mb-5">A CRUD App built with React and CSS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Myport;