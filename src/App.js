import React from "react";
import withborder from "./withborder";
import withprofile from "./withprofile";
import {compose} from "recompose";

class App extends React.Component{
    render(){
        return(
            <>
            <h1>Soon To be</h1>
            <p>{this.props.name}</p>
            </>
        );
    }
}

export default compose(withborder,withprofile)(App); //compose library is used to nesting Multiple Hoc(higher order component)
//export default WithBorder(App);     // this is for using single Hoc(higher order component)


//these hoc are used to display some particular information on a selective components