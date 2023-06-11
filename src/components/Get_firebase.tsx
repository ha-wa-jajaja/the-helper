import { useEffect, useState } from "react";

// import whole database
import { fireStore } from "../firebase.config";

// import functions to get
import { getDocs, collection } from "firebase/firestore";

const Get_Firebase = () => {
    const [places, setPlaces] = useState<Array<Object>>([]);

    useEffect(() => {
        getPlaces();
        // empty array as param to make sure it only runs at init
    }, []);

    // set database and collection
    const placesCollectionRef = collection(
        fireStore,
        "places"
    );
    const getPlaces = async () => {
        try {
            const data = await getDocs(placesCollectionRef);
            const filtered = data.docs.map((doc) => ({
                ...doc.data(),
                // if want to extract some attributes only, add below
                // id:doc.id
            }));
            setPlaces(filtered);
        } catch (err) {
            console.error(err);
        }
    };

    return <section></section>;
};

export default Get_Firebase;
