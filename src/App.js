// import logo from './logo.svg';
import './App.css';
import Styles from './styles.module.css';

function App() {
  return (

    <div className={Styles.container}>
      <div className={Styles.card1}>
      <img src='logo.png' className={Styles.logo}/>
      <div className={Styles.pick}>
      <img className={Styles.medImage} src='1.jpg' />
      </div>
       
      </div>

      <div className={Styles.card2}>
        <div className={Styles.page}>
          <h1 className={Styles.card_title}>WELCOME TO MEDFES</h1>
          <h2>Sign In</h2>
          <input className={Styles.input} type='text' placeholder='username' />
          <input className={Styles.input} type='password' placeholder='password' />
          <div className={Styles.Text}>
            <div><input type='checkbox' className={Styles.check}/> Remember me</div>
            <a className={Styles.forgot} href='/'>FORGOT USERNAME?</a>
          </div>
          <button className={Styles.btn}>Login</button>
          <div className={Styles.Or}>
            OR
          </div>
        <button className={Styles.btn}>Register Now</button>
      </div>
      </div>
    </div>
  )
}

export default App;
