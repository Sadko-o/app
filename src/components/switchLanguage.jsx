import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { switchLanguage } from "../redux/slices/languageSlice";
import './styles/switchLanguage.sass'

export function SwitchLanguage() {
    const dispatch = useDispatch();
    const activeButton = useSelector((state) => state.language.activeButton);

    const handleSwitch = (lang) => {
        dispatch(switchLanguage(lang));
    };

    return (
        <div className="switchLanguage">
            <button
                className={`button ${activeButton === "Eng" ? "active" : ""}`}
                onClick={() => handleSwitch("Eng")}
            >
                Eng
            </button>
            <button
                className={`button ${activeButton === "Rus" ? "active" : ""}`}
                onClick={() => handleSwitch("Rus")}
            >
                Rus
            </button>
        </div>
    );
}
