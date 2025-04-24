require('@babel/register')({
    presets: ['@babel/preset-env', '@babel/preset-react']
});

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('../react/App.jsx').default;
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const { pipe } = ReactDOMServer.renderToPipeableStream(React.createElement(App, {
        queryParameters: req.query
    }), {
        bootstrapScripts: ['/static/client.js'],
        onShellReady() {
            res.statusCode = 200,
            res.setHeader('Content-type', 'test/html');
            pipe(res);
        },
        onError(error) {
            console.error('Error during rendering', error);
            res.statusCode = 500;
            res.send('An error occured');
        }
    });
});

module.exports = router;
