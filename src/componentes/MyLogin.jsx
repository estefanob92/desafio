import React from 'react';
import MyImage from '../tire-icon.png';


export default function MyLogin() {
  return (
       <div className='myLogin' id='back'>
          <div id='mainbox'>
                  <div id='leftbox'>
                      <div id='marca'>
                          <img src={MyImage} alt="icon" />
                          <h4>CleanMyCar</h4>
                      </div>
                      <div id='india'>India's first waterless car cleaning company</div>
                  </div>
                  <div id='rightbox'>
                      <a href="#/" id='help'>Need help?</a>
                      <form>
                          <h4>Log in</h4>
                          <label for="email">Email</label>
                          <input type="email" name="" id="email" placeholder="joe@email.com"/>
                          <label for="password">Password</label>
                          <input type="password" name="" id="pass" placeholder="Enter your password"/>
                          <a href="#/" id='forgot'>forgot password?</a>
                          <input id='btnLogin' type="submit" value="Login"/>
                      </form>
                  </div>
              </div>
        </div> 
  )
}
