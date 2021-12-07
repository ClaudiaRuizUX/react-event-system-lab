
import React, {Component} from 'react';

export default class EyesOnMe extends Component {
    
    onFocus = () => console.log('Good');
    onBlur = () => console.log('hey! Eyes on me!');
    
    
    render () {
        return (
            <button onFocus={this.onFocus} onBlur={this.onBlur}> </button>   
        );
    }

}
