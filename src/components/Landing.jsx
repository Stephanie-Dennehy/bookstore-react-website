import React from 'react';
import UndrawBooks from '../assets/Undraw_Books.svg';

const Landing = () => {
    return  (
        <section id="landing">
            <header>
                <div className="header__containter">
                    <div className="header__description">
                        <h1>Georgia's most awarded online bookstore</h1>
                        <h2>Find your dream book with <span className="purple">Name</span></h2>
                        <a href="#features">
                            <button className="btn">Browse Books</button>
                        </a>
                    </div>
                    <figure className="header__img--wrapper">
                        <img src={UndrawBooks} alt="" />
                    </figure>
                    
                </div>
            </header>
        </section>
    )
}

export default Landing;