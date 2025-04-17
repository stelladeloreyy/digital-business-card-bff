import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App.jsx';

const urlSearchParams = new URLSearchParams(window.location.search);
const queryParameters = Object.fromEntries(urlSearchParams.entries());

hydrateRoot(document, <App queryParameters={queryParameters} />);
