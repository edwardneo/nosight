//const firebase = require("firebase/app");
//const functions = require('firebase-functions');
//const admin = require('firebase-admin');
//require("firebase/storage");
import * as functions from "firebase-functions";
import { admin, storage } from "./config.js";
import * as express from "express";
import { ref, uploadString } from "firebase/storage";
//const express = require('express');

//initialize firebase inorder to access its services
//admin.initializeApp();


//initialize express server
const app = express();

//initialize the database and the collection 
const userCollection = 'img';

app.post('/img', async (req, res) => {
    console.log(req.body);
    try {
        const imgRef = ref(storage, "images/img.jpeg");
        const message = "data:text/plain;base64,5b6p5Y+344GX44G+44GX44Gf77yB44GK44KB44Gn44Go44GG77yB"
        uploadString(imgRef, message, 'data_url')
            .then((snapshot) => console.log("Uploaded data_url string!"));
        /*admin.storage().ref().child(`images/img_${Number(Date.now())}.jpeg`)
            .putString("data:text/plain;base64,5b6p5Y+344GX44G+44GX44Gf77yB44GK44KB44Gn44Go44GG77yB", 'data_url')
            .then((snapshot) => console.log("Created image"));*/
        res.status(201).send(`Created an image`);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
})

app.get('/img', async (req, res) => {
    try {
        const images = await db.collection("images").doc("p1").get();
        res.status(200).send(images.data());
    } catch (error) {
        res.status(400).send(error);
    }  
})

// Expose Express API as a single Cloud Function:
exports.widgets = functions.https.onRequest(app);