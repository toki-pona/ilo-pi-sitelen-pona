import React from 'react';
import html2canvas from 'html2canvas';
window.html2canvas = html2canvas; //hack
import FileSaver from 'lib/FileSaver.js';
import canvasToBlob from 'lib/canvas-toBlob.js';

export default class ExporterComponent extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }

  onExportClick() {
    const dom = this.refs.exportableArea.getDOMNode();

    html2canvas(dom, {
      allowTaint: false,
      logging: true,
      useCORS: true,
      width: dom.clientWidth,
    }).then(function(canvas) {
      canvas.toBlob(function(blob) {
        FileSaver.saveAs(blob, "text.png");
      });

      // document.body.appendChild(canvas);
    }, function (err) {
      console.error(err);
    });
  }


  render() {
    return (
      <div>
        <button onClick={this.onExportClick.bind(this)}>Export to PNG</button>
        <div ref="exportableArea" style={{display:'table'}}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

/*

canvas.toBlob(function(blob) {
    saveAs(blob, "pretty image.png");
});
*/