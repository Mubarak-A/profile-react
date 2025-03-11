import react, { useState } from 'react';
import reactDOM from 'react-dom/client';
import facebook_logo from './facebook.svg';
import instagram_logo from './instagram.svg';
import linkedIn_logo from './linkedin.svg';
import user_logo from './user.svg';


let Profile = () => {


    return <>
        <header>
            <h2>Profile</h2>
        </header>

        <main>

            <figure className='hero--section'>
            
                <img className='header--logo' src={user_logo} alt='Mubarak Olasunkanmi'></img>
                <figcaption className=''>Mubarak Olasunkanmi</figcaption>
            
            </figure>

            <div className='hero--details'>
                
                    <div className='details--title--wrapper'>
                        <h4 className='details--title'>My Biography:</h4>
                        <p>Mubarak Olasunkanmi is a learning junior frontend developer. He is able to write HTML, CSS, JavaScript and React. In addition to his learning he has written some projects from the knowledge he acquired while learning.</p>
                    </div>

                    <div className='details--title--wrapper'>
                        <h4 className='details--title'>List of some projects I have written:</h4>
                        <ul>
                            <li><p>Faq Accordion</p></li>
                            <li><p>Age Calculator</p></li>
                            <li><p>Rating Component</p></li>
                            <li><p>Contact Form</p></li>
                            <li><p>Clipboard Landing Page</p></li>
                        </ul>
                    </div>
            </div>

            <div className='contact--section'>

                <h4 className='contact--title'>Contact Form</h4>

                <form action="">
                    <div className='contact--body'>
                        
                            <label htmlFor="">First Name</label>
                            <input type="text" required></input>
                        

                            <label htmlFor="">Last Name</label>
                            <input type="text" required></input>
                        

                            <label htmlFor="">Email</label>
                            <input type="text" required></input>
                        

                            <label htmlFor="">Gender</label>
                            <div className='gender--btn'>
                                <label htmlFor="">Male</label><input name='gname' type="radio" tabIndex={0}></input>
                                <label htmlFor="">Female</label><input name='gname' type="radio" tabIndex={0}></input>
                            </div>
                    
                        
                            <label htmlFor="">Purpose of Contact</label>
                        
                            <div className='purpose__btn'>
                                <div className='purpose__btn--wrapper'>
                                    <label htmlFor="" className='btn--txt'>Official</label><input type="checkbox"></input>
                                    <label htmlFor="" className='btn--txt'>Non-official</label><input type="checkbox"></input>
                                </div>

                                <div className='purpose__btn--wrapper'>
                                    <label htmlFor="" className='btn--txt'>Confidential</label><input type="checkbox"></input>
                                    <label htmlFor="" className='btn--txt'>Non-confidential</label><input type="checkbox"></input>
                                </div>
                                
                            </div>
                        
                            <label htmlFor="">Message</label>
                            <textarea name='' id='' className='message--field'></textarea>

                            <div className='btn--wrapper'>
                                <button>Submit</button>
                            </div>

                    </div>
                </form>
            
            </div>

        </main>

        <footer className='footer'>
            
            <div className='footer__links--wrapper'>

                <div className='footer__links' tabIndex={0}>
                <img className='footer--logo' src={linkedIn_logo} alt=""></img>
                <a tabIndex={-1} className='links--text' href="https://www.linkedin.com/login">LinkedIn</a>
                </div>

                <div className='footer__links' tabIndex={0}>
                <img className='footer--logo' src={instagram_logo} alt=""></img>
                <a tabIndex={-1} className='links--text' href="https://www.instagram.com/accounts/login/?hl=en">Instagram</a>
                </div>

                <div className='footer__links' tabIndex={0}>
                <img className='footer--logo' src={facebook_logo} alt=""></img>
                <a tabIndex={-1} className='links--text' href="https://www.facebook.com/login/">Facebook</a>
                </div>
                
            </div>

        </footer>

    </>
}

export default Profile