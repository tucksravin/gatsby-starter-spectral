import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import Form from '../components/Form';





import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                Explore
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
    </section>

    <section id="one" className="wrapper style2 special">
      <div className="inner">

        <header className="major">
          <h2>
            I am a storyteller.
            <br />
          </h2>
          <p>
            By that I mean I structure my life around creating and sharing narratives.
          </p>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon solid fa-pen major style3">
              <span className="label"></span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-microphone major style3">
              <span className="label"></span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-vial major style3">
              <span className="label"></span>
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper alt style5">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
          I am a writer.
          </h2>
          <p>
            I write scripts, short stories, and storygames. <Scroll type="id" element="three"><a href="/#">Here's</a></Scroll> some of my work.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
            I am an improviser.
          </h2>
          <p>
            I host and produce <a href="https://sceneplay.fireside.fm/">Scene Play</a>,
            an actual play storygaming podcast.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            I am a biologist.
          </h2>
          <p>
            I study the role of Hedgehog signaling in hematopoietic malignancies
             in <a href="https://www.cedars-sinai.org/research/labs/merchant.html">the Merchant Lab</a> at Cedars-Sinai.
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style2 special">
      <div className="inner">
        <header className="major">
          <h2>Here are some of the stories I'm telling.</h2>
        </header>
        <ul className="features">
        <li className="icon solid fa-cog">
          <h3>Caldea</h3>
          <p>
            <i>there is no possible path but the one you have tread</i>
            <br/><br/>
            Caldea is a show about love masquerading as a show about authoritarian technocracy masquerading as a show about love.
            <br/><br/>
            <Scroll type="id" element="ctaDark"><a href="/#">Contact me</a></Scroll> if you'd like to read the pilot or the pitch.
          </p>
        </li>

          <li className="icon solid fa-broadcast-tower">
            <h3>FM</h3>
            <p>
              <i>this isn't a western and Martin isn't a gunslinger</i>
              <br/><br/>
              FM (placeholder title) is an attempt to rebuild a notion of community, and to meditate on relationships unmediated by institution.
              <br/><br/>
              This is the pilot I am currently working on.

            </p>
          </li>
          <li className="icon solid fa-wind">
            <h3>The God of the Wind</h3>
            <p>
              <i> a cry, a scream, a noise without intent</i>

              <br/> <br/><br/>
              The God of the Wind is a short story about media, religion, and identity. It's rather blunt.

              <br/> <br/>

              You can find a pdf of it <a href="https://www.dropbox.com/s/l4k3kbtbohr6o1v/The%20God%20of%20the%20Wind%20Current.pdf?dl=0">here.</a>
            </p>
          </li>
          <li className="icon solid fa-link">
            <h3>Merida</h3>
            <p>
            <i>the City in the Sky, the Bridge of the World, the Chained Isles</i>
              <br/> <br/>
              Merida and the Floating City of Kai is an audiodrama about obligation and responsibility.
              <br/><br/>
              You can find the script <a href="https://www.dropbox.com/s/wqza0ovho4acgg5/Merida%20v4.pdf?dl=0">here.</a> The audiodrama will be in the Scene Play feed winter 2020.

            </p>
          </li>
          <li className="icon solid fa-water">
            <h3>Crete</h3>
            <p>
              <i>in falling I earned your love</i>
              <br/> <br/> <br/>
              Crete is a three-act musical about the relationship of Minos and Daedalus.
              <br/> <br/>
              If you're interested in hearing some of the music <Scroll type="id" element="ctaDark"><a href="/#">contact me.</a></Scroll>
            </p>
          </li>
          <li className="icon solid fa-adjust">
            <h3>Slow Violence</h3>
            <p>
              <i>relict: a population or individual that represents the last of its kind</i>
              <br/> <br/>
              Slow Violence is a storygame about violences that take longer than a moment to take their toll.
              <br/><br/>
              It is in playtesting, <Scroll type="id" element="ctaDark"><a href="/#">contact me</a></Scroll> if you would like a packet.
            </p>
          </li>
        </ul>
      </div>
    </section>
      <Form/>
      </Layout>
);

export default IndexPage;
