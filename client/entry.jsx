'use strict';

import 'styles/main.scss';
import 'styles/fonts/tp/stylesheet.css';

import React from 'react/addons';
import IndexComponent from 'components/Index/IndexComponent.jsx';
import ga from 'react-google-analytics';

React.render(<IndexComponent />, document.body);
ga('create', 'UA-71931712-1', 'auto');
ga('send', 'pageview');
