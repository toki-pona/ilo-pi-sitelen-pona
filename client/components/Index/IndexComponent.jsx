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
        <div>
          <p className="muted"><small>Created for fun by <a target="_blank" href="https://www.facebook.com/thorgeir.tycho">Sergey Tikhonov</a></small></p>
          <p className="muted"><small>Source code at <a target="_blank" href="https://github.com/toki-pona/ilo-pi-sitelen-pona/">Github</a></small></p>
        </div>
      </section>
    );
  }
}

IndexComponent.defaultProps = {
  items: []
};
