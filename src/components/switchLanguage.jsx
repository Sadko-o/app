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
                className={`button ${activeButton === "Eng" ? "active" : "transparent"}`}
                onClick={() => handleSwitch("Eng")}
            >
                <p className="languages">Eng</p>
            </button>
            <button
                className={`button ${activeButton === "Rus" ? "active" : "transparent"}`}
                onClick={() => handleSwitch("Rus")}
            >
                <p className="languages">Rus</p>
            </button>
        </div>
    );
}
