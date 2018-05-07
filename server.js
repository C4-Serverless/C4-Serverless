const express = require('express');
const path = require('path');
const body = require('body-parser');
const lambdaController = require('./C4/index.js');
const functionList = require('./awsLambda/listFunction.json');
const app = express();

lambdaController.configure('us-east-1','us-east-1:e9013370-61d4-42ae-af82-ede66d14f6db');
lambdaController.setFunctionList(functionList);

app.get('/index.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.js'));
});

app.get('/secondPage', (req, res) => {
    res.sendFile(path.join(__dirname, 'secondPage.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// lambdaController.createTagGroup("#HelloWorld", "TestFunction1", "TestFunction2");
// lambdaController.createTagGroup("#HelloWorld1", "TestFunction3");
// lambdaController.warmupFunctions(0.1,"TestFunction4");
// lambdaController.warmupTagGroup(0.1, "#HelloWorld1");

app.listen(3000, () => {
    console.log("Listening on PORT");
});