import React, { useRef } from "react";
import classes from "./FileInput.module.css";

export const FileInput = (props) => {
    // const check = (e) =>{
    //     if(e.target.files[0])

    // }

    return (
        <div>
            <label htmlFor="formId">Обрати фото</label>
            <input
                {...props}
                // onChange={(e) => {
                //     check(e);
                // }}
                type="file"
                id="formId"
                style={{ display: "none" }}
            />
        </div>
    );
};
