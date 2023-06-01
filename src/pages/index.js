import React, {useCallback, useEffect} from "react";
import {Unity, useUnityContext} from "react-unity-webgl";

export default function Home() {
    const {
        unityProvider,
        isLoaded,
        // addEventListener,
        // sendMessage,
        // removeEventListener,
        loadingProgression,
    } = useUnityContext({
        loaderUrl: "static/BigCityBank.loader.js", // absolute path for unity assets
        dataUrl: "static/ac90f625105f10627a05f7751d73efe8.data",
        frameworkUrl: "static/c3d76828b4679c9ec76b2d8969a9ac99.js",
        codeUrl: "static/433a79da03394876a27b378d50645ade.wasm",
        streamingAssetsUrl: "StreamingAssets",
        companyName: "Test",
        productName: "Test - Test",
        productVersion: "0.0.1",
        webglContextAttributes: {"preserveDrawingBuffer": true},
    });

    // const onSceneLoaded = useCallback(() => {
    //     console.log("Scene Is Loaded!");
    // }, []);
    //
    // const onSceneUnLoaded = useCallback(() => {
    //     console.log("Scene Is UnLoaded!");
    // }, []);
    //
    // const handleClick = () => {
    //     console.log("Handle Click Action!");
    //     sendMessage("GameController", "handleClick", 1);
    // };

    // useEffect(() => {
    //     // if (!isLoaded) return;
    //     // Unity Context is ready for action
    //
    //     addEventListener("onSceneLoaded", onSceneLoaded); {/* example for subscribe event */}
    //     addEventListener("onSceneUnLoaded", onSceneUnLoaded);
    //
    //     return () => {
    //         removeEventListener("onSceneLoaded", onSceneLoaded); {/* example for unsubscribe event */}
    //         removeEventListener("onSceneUnLoaded", onSceneUnLoaded);
    //     };
    // }, [addEventListener, removeEventListener, onSceneLoaded, onSceneUnLoaded]);


    return (
        <>
            {/*{!isLoaded && (*/}
            {/*    <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>*/}
            {/*)} /!* example for loading state *!/*/}
            {/*<button onClick={handleClick}>Handle Click</button> /!* example for sendMessages action *!/*/}
            <Unity style={{visibility: isLoaded ? "visible" : "hidden"}} unityProvider={unityProvider}/>  {/* This Unity component returns an HTML5 canvas element */}
        </>
    );
}
