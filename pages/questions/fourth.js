import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function Second(){
    return (
    <div className={styles.container}>
    <h1>Fourth Question</h1>
    <p> <strong>Your personal recommendations::</strong></p>
<p> When it comes to looking for a solution for hosting your Next.js site, what are some of the common things
you would value as the Engineering Manager for:</p>
    <ol>
  <li> A mom and pop business? - Easy to use interactive website, fast to develop and cheap to maintain.</li>
  <li> An NFT? - A secure app </li>
  <li> A Marketing Page for a large corporation like Nintendo? - A highly informative website, SEO aware and   </li>
</ol>

    </div>
    )
}