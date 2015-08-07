import React from 'react';
import tpTokenize from 'lib/tp-tokenize.jsx';
import words from 'lib/tp-words.jsx';
import codepage from './codepage.jsx';

export default class SitelenComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      tokens: []
    };
  }

  // componentDidUpdate(nextProps, nextState) {
  //   const [value, pValue] = [nextProps.value, this.props.value];
  //   if(value!==pValue) {
  //     const tokens = tpTokenize(value);
  //     this.setState({tokens});
  //     console.log(tokens);
  //   }
  // }

  renderTokens(tokens) {
    return (tokens||[]).map(sitelenize);
  }


  render() {
    const tokens = tpTokenize(this.props.value);
    const tokenViews = this.renderTokens(tokens);

    return (
      <div>
        <div className="tokipona">{tokenViews}</div>
        {/*<pre>{JSON.stringify(this.state.tokens, false, 2)}</pre>*/}
      </div>
    );
  }
}


function sitelenize([type, value], index, all) {
  const [pType, pValue] = index ? all[index-1] : [null, null];

  if(type === 'word') {
    return (<span className="sitelen">{wordToSymbol(makeSubstitutions(value))}</span>);
  }
  if(type === 'sign') {
    // if(value === '.') {
    //   return (<span className="period">&nbsp;&nbsp;</span>);
    // }
    return (<span className="sign">{value}</span>);
  }
  if(type === 'space') {
    if(pType === 'word') {
      return (<span className="interword"></span>);
    } else {
      return (<span className="space"> </span>);
    }
  }
  if(type === 'newline') {
    return (<br className="newline" />);
  }
  if(type === 'mess') {
    return (<span className="mess">{value}</span>);
  }
}

function makeSubstitutions(value) {
  if(value === 'ale') {
    return 'ali';
  }
  if(value === 'namako') {
    return 'sin';
  }
  if(value === 'kin') {
    return 'a';
  }
  if(value === 'oko') {
    return 'lukin';
  }
  return value;
}

function wordToSymbol(word) {
  return String.fromCharCode(codepage[word]);
}