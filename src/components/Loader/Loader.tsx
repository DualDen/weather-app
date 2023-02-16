import React, {FC} from 'react';
import loader from "../../assets/loader.svg"
const Loader:FC = () => {
    return (
        <div style={{display: "flex",justifyContent: "center",alignItems: "center",width: "100%",height: "100%"}}>
            <img src={loader} alt=""/>
        </div>
    );
};

export default Loader;