import React, {Component} from 'react'
import ExampleSection from '../../ExampleSection'
import scope from '../../ExampleScope'

const examples = {
  'TextAlign': require('raw!../../examples/TextAlign.js.example')
}

export default class TextAlignExamplePage extends Component {
  render() {
    return <div className="rev-Row rev-Row--collapsed">
      <ExampleSection title="Text Alignment" examples={examples} depth={1} scope={scope} />
    </div>
  }
}
