import { useState, useEffect } from "react";
import axios from "axios";

const useFactsWorking = () => {
    const [fact, setFact] = useState(null);
    const [error, setError] = useState(null);


    const fetchFact = async () => {
        try {
            const response = await axios.get(`https://uselessfacts.jsph.pl/api/v2/facts/random?language=en`);
            // setData(response.data.text);
            // console.log(response.data.text);
            // return {response, error}
            // const test = await response.json();
            if (response.data && response.data.text) {
                setFact(response.data.text); 
                // let testfact = response.data.text;
                 // Set fact in state
              } else {
                setFact("No fact available for today.");
              }
            
        } catch (err){
            setError(err.message);
            setFact("No fact available for today.");
            console.error('error fetching data: ', err)
        }
    };
    useEffect(() => {
        fetchFact();
    }, []);
    // fetchFact();
    // console.log(fact)
    return {fact};

    // return "3"
};

export default useFactsWorking;