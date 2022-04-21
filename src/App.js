import React, { Component } from 'react'
import Layout from './Component/Layout/Layout';
import BurgerBuilder  from './Container/BurgerBuilder/BurgerBuilder';
class App extends Component {
  render() {
    return (
      <Layout>
       <BurgerBuilder/>
      </Layout>

    )
  }
}
export default App;