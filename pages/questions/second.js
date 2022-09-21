import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function Second(){
    return (
    <div className={styles.container}>
    <h1>Second Question</h1>
    <p>Reflection on past experience:</p>
    <ol>
  <li> <strong>In your next role, what are you looking to learn or do more of?</strong></li>
  <p> - In my next role I am looking for opportunities to learn and grow my skills from a technical standpoint, and a chance to learn more leadership skills over time. </p>
  <li> <strong> Which (non-Vercel) technical or sales article, guide or lightning talk left the biggest positive
impression on you? Why? (and please provide the link) </strong> </li>
<p> - More than an article, I would like to talk about a sales book that left a big impression on me. A book called "To sell is Human". The books explains on how everything revolves around sales and a different perspective to sales along with a few tips and pointers to sell better. </p>
<a target={"_blank"} rel="noreferrer"  href='https://www.amazon.com//Sell-Human-Surprising-Persuading-Influencing/dp/1786891719/ref=sr_1_1?crid=39ZK2LO09TPRA&keywords=To+Sell+Is+Human&qid=1663765688&sprefix=%2Caps%2C208&sr=8-1'>Link to the book</a>
</ol>

    </div>
    )
}