# react-selected-items
> React component for selected items.


## properties:
```javascript
  static propTypes = {
    className:PropTypes.string,
    type:PropTypes.oneOf([
      'single',
      'multiple',
      'toggle',
      'other'
    ]),
    items:PropTypes.array,
    value:PropTypes.array,
    valueKey:PropTypes.string,
    onChange:PropTypes.func,
  };
```

## usage:
```jsx
import ReactSelectedItems from './main';
let id=100;
class TestItem extends React.Component{
  render(){
    const {value,text,selected,...props} = this.props;
    console.log(selected);
    return (
      <div {...props} data-kk={`kk-${selected}`} className="test-item">{value}={text}</div>
    );
  }
}

class App extends React.Component{
  state = {
    items1:[
      {
        value:1,
        text:'abc'
      },
      {
        value:2,
        text:'bcd'
      },
      {
        value:3,
        text:'AAA'
      }
    ],
    items2:[
      {
        value:1,
        text:'222-abc'
      },
      {
        value:2,
        text:'222-bcd'
      },
      {
        value:3,
        text:'222-AAA'
      },
      {
        value:4,
        text:'222-BBB'
      },
      {
        value:5,
        text:'222-CCC'
      }
    ],
    items3:[
      {
        value:1,
        text:'333-abc'
      },
      {
        value:2,
        text:'333-bcd'
      },
      {
        value:3,
        text:'333-AAA'
      },
      {
        value:4,
        text:'333-BBB'
      },
      {
        value:5,
        text:'333-CCC'
      }
    ],
    items4:[
      {
        value:1,
        text:'44477787-abc'
      },
      {
        value:2,
        text:'44477787-bcd'
      },
      {
        value:3,
        text:'44477787-AAA'
      },
      {
        value:4,
        text:'44477787-BBB'
      },
      {
        value:5,
        text:'44477787-CCC'
      }
    ],
    d4Value:[3],
    dValue:[1,4],
    dItems:[
      {
        value:1,
        text:'44477787-abc'
      },
      {
        value:2,
        text:'44477787-bcd'
      },
      {
        value:3,
        text:'44477787-AAA'
      },
      {
        value:4,
        text:'44477787-BBB'
      },
      {
        value:5,
        text:'44477787-CCC'
      }
    ]
  };
  _change1(inEvent){
    console.log(inEvent.target.value);
  }

  _change2(inEvent){
    console.log(inEvent.target.value);
  }
  _change3(inEvent){
    console.log(inEvent.target.value);
  }

  //singleToggle:
  _change4(inItem,inSelf){
    console.log('Your own implemnts:->',inItem,inSelf);
  }


  _click1(){
    const {dItems} = this.state;
    dItems.push({
        value:id++,
        text:'DDDYDYD787-CCC'
    });
    this.setState({
      dValue:[2,5],
      dItems:dItems.slice(0)
    })
  }

  _change5(inEvent){
    console.log(inEvent.target.value);
  }

  render(){
    return (
      <div className="hello-react-active-items">
        <h4>Single Active Item</h4>
        <ReactSelectedItems value={[1]} items={this.state.items1} type='single' onChange={this._change1.bind(this)}>
          <TestItem />
        </ReactSelectedItems>
        <h4>Multiple Active Item</h4>
        <ReactSelectedItems value={[1,4]} items={this.state.items2} type='multiple' onChange={this._change2.bind(this)}>
          <TestItem />
        </ReactSelectedItems>
        <h4>Toggle Active Item</h4>
        <ReactSelectedItems value={[2]} items={this.state.items3} type='toggle' onChange={this._change3.bind(this)}>
          <TestItem />
        </ReactSelectedItems>
        <h4>Other Active Item</h4>
        <ReactSelectedItems value={this.state.d4Value} items={this.state.items4} type='other' onChange={this._change4.bind(this)}>
          <TestItem />
        </ReactSelectedItems>

        <h4>Dynamic value/items</h4>
        <button onClick={this._click1.bind(this)}>Dynamic Set value & items</button>
        <ReactSelectedItems value={this.state.dValue} items={this.state.dItems} type='multiple' onChange={this._change5.bind(this)}>
          <TestItem />
        </ReactSelectedItems>
    </div>
    );
  }
}

```



## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install

