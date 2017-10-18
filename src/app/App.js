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
        <DemographicInformation title="David de Lusenet" info={[
          {"label": "Occupation", "value": "Front-end developer"},
          {"label": "Date of birth", "value": "June 24, 1992"},
          {"label": "Nationality", "value": "Dutch"},
          {"label": "Address", "value": "Preangerstraat 13A, 1095 HA, Amsterdam", "url": "https://goo.gl/maps/fWH6aeKAkEH2"},
          {"label": "Mobile", "value": "06 - 50 46 96 00", "url": "+31650469600"},
          {"label": "Email", "value": "david@lusenet.nl", "url": "david@lusenet.nl"},
          {"label": "GitHub", "value": "Check out the code of this website", "url": "https://github.com/daviddelusenet"},
          {"label": "LinkedIn", "value": "Let's connect", "url": "https://www.linkedin.com/in/david-de-lusenet-31b838111"}
        ]} avatar="/img/avatar.png" />
        <Title text="Personal information" />
        <Paragraph text="Since a young age I was always interested in computers. However, I didn't started developing until about seven years ago when I started with my education Communication and Multimedia Design at the University of Applied Sciences Amsterdam." />
        <Paragraph text="During my first job at a company called Atabix Solutions I learned a lot of my basic development skills. At the time that I was working there Atabix was still an up and coming agency which gave me the opportunity to have a lot of responsibility." />
        <Paragraph text="After working here for almost four years I needed to do a graduation internship to finish my education. I decided to do this at Momkai, where I'm still working until this very day." />
        <Title text="Working experience" />
        <Subtitle text="July 2016 - present: front-end developer at Momkai" />
        <Paragraph text="After my internship ended I started working fulltime at Momkai. Here I really made the next step in honing my development skills. For example, I started working with React and became really good in Webpack." />
        <Paragraph text="Momkai gave me the opportunity to work on a lot of cool projects like the KNVB, the Master Digital Design, IKEA and VanMoof." />
        <Subtitle text="February 2016 - June 2016: intern front-end developer at Momkai" />
        <Paragraph text="I started working at Momkai as an intern during my graduation internship. During my internship I mainly focused on improving my JavaScript skills and writing cleaner code." />
        <Subtitle text="March 2012 - January 2016: (intern) front-end developer at Atabix Solutions" />
        <Paragraph text="I started this job as an intern. After my internship ended, both parties were so excited about the collaboration so far that Atabix offered me a job. I had a lot of fun working there for four years and developed numerous projects." />
        <Subtitle text="2008 - 2010: technical support at the University of Applied Sciences Amsterdam" />
        <Paragraph text="My job here was to help students with any technical difficulties they faced. This could range from problems with Final Cut Pro to help with Photoshop." />
        <Subtitle text="2006 - 2008: delivery guy for multiple restaurants" />
        <Paragraph text="During this two year span I worked as a delivery guy for several restaurants. The main objective of this job was to deliver food using a scooter." />
        <Title text="A selection of my work" />
        <Paragraph text="During my seven years as a developer I made a lot of websites. Below you will find some of my best work so far. All these websites are made in collaboration with my colleagues at Momkai." />
        <List items={[
          {"text": "Momkai", "url": "http://www.momkai.com/"},
          {"text": "KNVB", "url": "http://www.knvb.nl/"},
          {"text": "Voetbal.nl", "url": "http://www.voetbal.nl/"},
          {"text": "Master Digital Design", "url": "http://www.masterdigitaldesign.com/"},
          {"text": "VanMoof", "url": "http://www.vanmoof.com/"}
        ]} />
        <Paragraph text="As we speak I'm developing the new Momkai portfolio website in React. This will be one of the coolest websites I've ever build." />
        <Title text="Development skills" />
        <Paragraph text="Tools I'm working with at the moment:" />
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
        <Paragraph text="Tools I've worked with in the past:" />
        <List items={[
          {"text": "Backbone.js"},
          {"text": "Gulp"},
          {"text": "Grunt"},
          {"text": "Smarty"},
          {"text": "jQuery"},
          {"text": "Twitter Bootstrap"}
        ]} />
        <Title text="Personal interests" />
        <Paragraph text="In my free time I spend a lot of time playing and watching basketball. I can't get enough of it, the NBA is just amazing to watch." />
        <Paragraph text="Besides this, I like to spend my money on new shoes or clothing and I really enjoy playing a good video game once in a while." />
      </div>
    );
  }

}

export default App;
