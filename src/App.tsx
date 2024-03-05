import React, { useEffect, useState } from "react";
import Get_Firebase from "./components/Get_firebase";
import Weather from "./components/Weather";
function App() {
    const [num, setNum] = useState<Number>(0);

    return (
        <div className="App">
            <Get_Firebase />
            <Weather />
            <h1 className="mt-10">Hi</h1>
        </div>
    );
}

export default App;
