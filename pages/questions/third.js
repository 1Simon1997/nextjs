import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function Third(){
    return (
    <div className={styles.container}>
    <h1>Third Question</h1>
    <p>Practice Email Responses</p>
    <p> Please include one email response for each inquiry, just as if you were responding to a customer. </p>
    <ol>
  <li>  <strong> Sales Inquiry: Do I need Enterprise?</strong>
  <p> Subject: Sales Lead for barnesandnoble.com</p>
  <p> Name: Joe Fox </p>
  <p> Employees: 1000+ </p>
  <p> How can we help you: New site launching soon using Next.js and we are thinking about using Vercel
to host. I would like more information about the Enterprise option. </p>
<p> <strong>Answer:</strong></p>
<p> Hi Joe,</p>
<p> Thank you for reaching out to Vercel</p>
<p> We understand that you would like to launch your new site using Next.js and host it trough Vercel. Given the scope of your website and requirement, the Enterprise plan would be the best suited option for your organization. The Enterprise plan comes with a customization option to customize the features (like custom bandwidth, custom build execution, custom deloyements per day and so on) to fit your organization&apos;s requirement along with the best Security features (like Password Protected Previews, Custom Firewall Rules, Single-Sign On and 2FA and so on) to secure your site and the best product Support provided for your organzation.</p>
<p> We would  be glad to schedule a call with you to discuss regarding your requirements and the product in detail. Please let us know few of your convenient time slots (with time zone) so that we can schedule a meeting accordingly.</p> 
<p> Looking forward to hearing from you</p>
<p> Regards, <br/>
 Simon David <br/>
 Product Advocate </p>
</li>
<li> <strong>Sales Inquiry: Would Pro or Enterprise fit better for my team?</strong>
  <p> Subject: Sales Lead for hipcamp.com</p>
  <p> Name: Melissa Wright </p>
  <p> Employees: 10-100+ </p>
  <p> How can we help you: We are looking to re-platform our site and are considering Vercel. Would like to evaluate options to see if Pro or Enterprise would fit out needs better. Timeline is Q3. Can you
help?. </p>
<p> <strong>Answer:</strong> </p>
<p> Hi Melissa</p>
<p> Thank you for reaching out to Vercel</p>
<p> We understand that you are looking to re-platform your site and are considering Vercel. Based on your requirement we recommend the Pro plan as it would be best suited for your organization. The Enterpirse plan would not be required as it is designed for a more customized requirement. As your requirement is very straight forward, the features offered in the Pro plan would suffice the need. </p>
<p> We would  be glad to schedule a call with you to discuss regarding your requirements and the product in detail. Please let us know few of your convenient time slots (with time zone) so that we can schedule a meeting accordingly.</p> 
<p> Looking forward to hearing from you</p>
<p> Regards, <br/>
 Simon David <br/>
 Product Advocate </p>
</li>
</ol>
    </div>
    )
}