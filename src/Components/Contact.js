import React, { Component } from 'react';
import { TwitterTimelineEmbed, TwitterFollowButton} from 'react-twitter-embed';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var phone= this.props.data.phone;
      var email= this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">


            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">
            <TwitterFollowButton
          screenName={'Ramachetan1'}
              />
            <TwitterTimelineEmbed
  sourceType="profile"
  screenName="Ramachetan1"
  options={{height: 330}}
/> 

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address, Phone and e-mail</h4>
					   <p className="address">
						   {name}<br />
						   {city}{state}<br />
						   <span>{phone}<br /> {email}</span>
					   </p>
				   </div>

               <div className="widget widget_tweets">
                  <h4 className="widget-title">Say Hello</h4>
                  <ul id="twitter">
                     <li>
                        <span>
                        Have an idea for a new project? Let's work together to make something. Let's learn from each other and make something to make this world a better place.         
                        <br />
                        <a href = "mailto: ramachetan22@gmail.com">Send Email</a>
                        </span>
                     </li>
                     <li>

                     </li>
                  </ul>
		         </div>
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;