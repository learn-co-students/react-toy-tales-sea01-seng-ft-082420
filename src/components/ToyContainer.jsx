import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {

  return(
    <div id="toy-collection">
      {console.log(props.toys),
      props.toys.map((toy, idx) => <ToyCard key={idx} toy={toy} handleDonate={props.handleDonate}/>)
}
    </div>
  );
}
ToyContainer.defaultProps = {
  toys: []
}

export default ToyContainer;
