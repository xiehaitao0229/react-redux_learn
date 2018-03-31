import React from 'react'
  class App extends React.Component{
      constructor(props){
          super(props);
          this.state = {
              num:10
          };
      }

      addNum(){
          let currentNum = this.state.num;
          this.setState({num:currentNum+1});
      }

      minusNum(){
          let currentNum = this.state.num;
          this.setState({num:currentNum-1});
      }

      render(){
          return(
              <div>
                  <h1>num:{this.state.num}</h1>
                  <button onClick={()=>this.addNum()}>num+1</button>
                  <button onClick={()=>this.minusNum()}>num-1</button>
              </div>
          );
      }
  }
  export default App
