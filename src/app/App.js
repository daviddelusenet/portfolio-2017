import React from 'react';
import update from 'immutability-helper';
import './App.scss';

// Import components
import DemographicInformation  from 'DemographicInformation/DemographicInformation';
import List                    from 'List/List';
import Paragraph               from 'Paragraph/Paragraph';
import Subtitle                from 'Subtitle/Subtitle';
import Title                   from 'Title/Title';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div styleName="App">
        <DemographicInformation title="David de Lusenet" occupation="Front-end developer" info={[
          //{"label": "Occupation", "value": "Front-end developer"},
          {"label": "Date of birth", "value": "June 24, 1992"},
          {"label": "Nationality", "value": "Dutch"},
          {"label": "Address", "value": "Preangerstraat 13A, 1095 HA, Amsterdam", "url": "https://goo.gl/maps/fWH6aeKAkEH2", "target": "_blank"},
          {"label": "Mobile", "value": "06 - 50 46 96 00", "url": "tel:+31650469600", "target": "_self"},
          {"label": "Email", "value": "david@lusenet.nl", "url": "mailto:david@lusenet.nl",  "target": "_self"},
          {"label": "GitHub", "value": "Check out my code", "url": "https://github.com/daviddelusenet", "target": "_blank"},
          {"label": "LinkedIn", "value": "Let's connect", "url": "https://www.linkedin.com/in/david-de-lusenet-31b838111", "target": "_blank"}
        ]} avatar="/img/avatar.png" />
        <Title text="Personal information" />
        <Paragraph text="Since a young age I was always interested in computers. However, I didn't start developing until about seven years ago, when I started with my education Communication and Multimedia Design at the University of Applied Sciences Amsterdam." />
        <Paragraph text="During my first job, at a company called Atabix Solutions, I learned a lot of my basic development skills. During that time, Atabix was still an upcoming agency that gave me the opportunity to have a lot of responsibility within the company." />
        <Paragraph text="After working here for almost four years, I needed to do a graduation internship to finish my education. I decided to do this at Momkai, where I still work until now." />
        <Title text="Working experience" />
        <Subtitle date="July 2016 - present" text="front-end developer at Momkai" />
        <Paragraph text="After my internship ended, I started working fulltime at Momkai. Here I really made the next step in expanding my development skills. An example of this is that I started working with React and became really good in Webpack." />
        <Paragraph text="Momkai gave me the opportunity to work on a lot of interesting projects like the KNVB, the Master Digital Design, IKEA and VanMoof." />
        <Subtitle date="February 2016 - June 2016" text="intern front-end developer at Momkai" />
        <Paragraph text="I started working at Momkai as an intern during my graduation internship. During my internship, I mainly focused on improving my JavaScript skills and writing cleaner code." />
        <Subtitle date="March 2012 - January 2016" text="(intern) front-end developer at Atabix Solutions" />
        <Paragraph text="I started this job as an intern as well. After my internship ended, both parties were so excited about the collaboration so far that Atabix offered me a job. I had a lot of fun working there for four years and developed numerous projects." />
        <Subtitle date="2008 - 2010" text="technical support at the University of Applied Sciences Amsterdam" />
        <Paragraph text="My job here was to help students with any technical difficulties they faced. This could vary from helping with Final Cut Pro to helping with Photoshop." />
        <Subtitle date="2006 - 2008" text="delivery guy for multiple restaurants" />
        <Paragraph text="During this two year span I worked as a delivery guy for several restaurants. The main objective of this job was to deliver food using a scooter." />
        <Title text="A selection of my work" />
        <Paragraph text="During my seven years as a developer I made a lot of websites. Below you will find some of my best works so far. All these websites are made in collaboration with my colleagues at Momkai." />
        <List items={[
          {"text": "Momkai", "url": "http://www.momkai.com/"},
          {"text": "KNVB", "url": "http://www.knvb.nl/"},
          {"text": "Voetbal.nl", "url": "http://www.voetbal.nl/"},
          {"text": "Master Digital Design", "url": "http://www.masterdigitaldesign.com/"},
          {"text": "VanMoof", "url": "http://www.vanmoof.com/"}
        ]} />
        <Paragraph text="As we speak I'm developing the new Momkai portfolio website in React. This will be one of the coolest websites I have ever build." />
        <Title text="Development skills" />
        <Paragraph text="Tools I am working with at the moment:" />
        <List items={[
          {"text": "HTML5"},
          {"text": "CSS3"},
          {"text": "SASS"},
          {"text": "JavaScript ES6"},
          {"text": "Webpack"},
          {"text": "React"},
          {"text": "GSAP"},
          {"text": "ScrollMagic"},
          {"text": "Twig"},
          {"text": "PHP"},
          {"text": "MySQL"},
          {"text": "GIT"},
          {"text": "Zurb Foundation"}
        ]} />
        <Paragraph text="Tools I have worked with in the past:" />
        <List items={[
          {"text": "Backbone.js"},
          {"text": "Gulp"},
          {"text": "Grunt"},
          {"text": "Smarty"},
          {"text": "jQuery"},
          {"text": "Twitter Bootstrap"}
        ]} />
        <Title text="Personal interests" />
        <Paragraph text="In my spare time, I spend a lot of time playing and watching basketball. I cannot get enough of it; the NBA is just amazing to watch." />
        <Paragraph text="Besides that, I am really into sneakers and fashion and I enjoy playing good video games every once in a while." />
      </div>
    );
  }

}

export default App;
