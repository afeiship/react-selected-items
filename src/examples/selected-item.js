import {ReactSelectedItem} from '../main';


export default class extends React.PureComponent {

  state = {
    disabled: true
  };

  _click1() {
    this.setState({disabled: !this.state.disabled})
  }

  _onClick = e =>{
    console.log('click!!');
  };

  render() {
    return (
      <div className="example-selected-item">
        <button onClick={this._click1.bind(this)}>Toggle</button>
        <ReactSelectedItem nodeName='button' selected={false} disabled={this.state.disabled} onClick={this._onClick}> Toggle
          Result - {String(this.state.disabled)} </ReactSelectedItem>
      </div>
    );
  }
}

