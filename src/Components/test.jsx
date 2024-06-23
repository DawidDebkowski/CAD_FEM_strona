import PropTypes from "prop-types"
import { useEffect, useState } from 'react';
import useSWR from 'swr';

// Import useSWR from swr package

// created function to handle API request
const fetcher = (...args) => fetch(...args).then((res) => res.json());

class Product {
  Product(id, name, size, is_available) {
    this.key = id;
    this.pname = name;
    this.size = size;
    this.is_available = is_available;
  }
}

function ProductComponent({Product}) {
  return(
    <div className="product">
      <p>{Product}</p>
    </div>
  )
}

// ProductComponent.propTypes = {
//   Product: PropTypes.shape({
//     pname: PropTypes.string
//   })
// }

const Swr = () => {
  const {
    data: test,
    error,
    isValidating,
  // } = useSWR('https://cadfem.pwr.edu.pl/apitest/', fetcher);
  } = useSWR("http://localhost/website/products", fetcher)
  //{ mode: "no-cors"},

  console.log(test);
  console.log("a");
  
  // Handles error and loading state
  if (error) return <div className='failed'>{error.text}</div>;
  if (isValidating) return <div className="Loading">Loading...</div>;
  if(!test) return <div className="Loading">nie test</div>;
  
  const array = [];
  test.forEach(element => {
    var hejka = new Product(element.id, element.name, element.size, element.is_available);
    array.push(
    <ProductComponent Product={element.name} key={element.id}/>
  );
  });
  
  console.log(array);
  

  return (
    <div>
      {array}
    </div>
  );
};


export default Swr;