import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "color": "#555",
        "fontFamily": "sans-serif",
        "fontSize": 18,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "body": {
        "color": "#555",
        "fontFamily": "sans-serif",
        "fontSize": 18,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "main": {
        "marginTop": 3,
        "marginRight": "auto",
        "marginBottom": 3,
        "marginLeft": "auto",
        "maxWidth": 90 * vw,
        "width": "50ch"
    },
    "h1": {
        "color": "#333"
    }
});