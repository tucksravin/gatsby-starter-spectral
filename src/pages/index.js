import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import Form from '../components/Form';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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
              <span className="label">Lorem</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-microphone major style3">
              <span className="label">Ipsum</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-vial major style3">
              <span className="label">Dolor</span>
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
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
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
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
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
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
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
            In an Austenesque city served and policed by automata, a matchmaker finds a clockwork oracle and learns secrets that will expose the foundations of his society.
            <br/><br/>
            Caldea is a show about love masquerading as a show about authoritarian technocracy masquerading as a show about love.
            <br/><br/>
            Contact me if you'd like to read the pilot.
          </p>
        </li>
          <li className="icon solid fa-link">
            <h3>Merida</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-broadcast-tower">
            <h3>FM</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-wind">
            <h3>The God of the Wind</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-water">
            <h3>Crete</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-adjust">
            <h3>Slow Violence</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
        </ul>
      </div>
    </section>
      <Form />
      </Layout>
);

export default IndexPage;
