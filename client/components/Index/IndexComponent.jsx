import React from 'react';
import SitelenComponent from 'components/Sitelen/SitelenComponent.jsx';
import ExporterComponent from 'components/Exporter/ExporterComponent.jsx';
import ga from 'react-google-analytics';

const GAInitiailizer = ga.Initializer;

export default class IndexComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      text: 'toki'
    };
  }

  onTextChange(event) {
    const text = event.target.value;
    this.setState({text});
  }

  render() {
    return (
      <section>
        <GAInitiailizer />
        <h2>ilo pi sitelen pona</h2>
        <p className="form">
          <textarea
            value={this.state.text}
            onChange={this.onTextChange.bind(this)}
          ></textarea>
        </p>
        <ExporterComponent>
          <SitelenComponent value={this.state.text} />
        </ExporterComponent>
      </section>
    );
  }
}

IndexComponent.defaultProps = {
  items: []
};
