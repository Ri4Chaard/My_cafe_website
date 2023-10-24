import React from "react";
import classes from "./FileInput.module.css";

export const FileInput = ({ children, accept, onChange, checker }) => {
    return (
        <div>
            <label htmlFor="formId" className={classes.fileInp}>
                {children}
                <input
                    accept={accept}
                    onChange={onChange}
                    type="file"
                    id="formId"
                    style={{ display: "none" }}
                />
                {checker ? (
                    <span style={{ color: "green" }}>
                        Картинка успешно загружена
                    </span>
                ) : (
                    <span style={{ color: "red" }}>Картинка не выбрана</span>
                )}
            </label>
        </div>
    );
};
