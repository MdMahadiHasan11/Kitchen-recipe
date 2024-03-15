import { useEffect } from "react";
import { useState } from "react";

const Carts = () => {

    const [carts,setCarts] = useState([]);

    useEffect(() =>{
        fetch('faceData.json')
        .then(res=>res.json())
        .then(data => setCarts(data));
    },[])

    return (
        <div>
            
        </div>
    );
};

export default Carts;