
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function First(){
    return (
    <div className={styles.container}>
    <h1>First Question</h1>
    <p>Things a Product Advocate Might Do:</p>
    <p>List the 3 things you
would be most interested in doing and the 3 you would be least interested in doing</p>
<p> <strong> Most Interested:</strong></p>
<ul>
  <li>Hop on a Zoom call to qualify a prospect or educate them about Vercel</li>
  <li>Recommend to customers the Vercel plan best suited for them</li>
  <li>Identify the types of prospect (agency, freelancer, executive) and respond accordingly</li>
  <li>Organize, Schedule & book meetings for Account Executives with prospects</li>
  <li>Evaluate an application to help determine if it's commercial or not</li>
</ul>
<p> <strong>Least Interested:</strong></p>
<ul>
  <li>Evaluate OSS sponsorship applications</li>
  <li>Hop on a Zoom call to do a product demo</li>
  <li>Create queries to look at a prospect's typical Vercel usage</li>
</ul>

    </div>
    )
}