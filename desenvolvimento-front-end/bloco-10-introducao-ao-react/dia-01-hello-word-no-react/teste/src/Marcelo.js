import React, {Component} from "react";

class Marcelo extends Component {
  render() {

    const holdObject = (item) => {
      return (
        <p>"Im holding a {item}"</p>
      );
    };

    const obj = ['Machine Gun', 'Bazuka', 'Pistol'];

    const whatAreYouDoing = (
      <section>
        <p>"What are you doing Marcelo?"</p>
        {holdObject('Bazuka!')}
      </section>
    );

    return (
      <div>
       <h1 className="hello">Hello again World</h1>
       {whatAreYouDoing}
       <ul>
         {obj.map((gun) => <li key={gun}>{gun}</li>)}
       </ul>
     </div>
    );
  };
}

export default Marcelo;