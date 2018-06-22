import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About Us!</h1>
        <ul>
          <li>
            <h3>David Stoll</h3>
            <img src='../../assets/team-members/david.jpg'/>
            <p>A little blurb about me</p>
          </li>
          <li>
            <h3>Joanna Coll</h3>
            <img src='../../assets/team-members/joanna.png'/>
            <p>A little blurb about me</p>
          </li>
          <li>
            <h3>Kris Sakarias</h3>
            <img src='../../assets/team-members/kris.jpg'/>
            <p>A little blurb about me</p>
          </li>
          <li>
            <h3>Sarah Bixler</h3>
            <img src='../../assets/team-members/sarah.jpg'/>
            <p>A little blurb about me</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default About;
