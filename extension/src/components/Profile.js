import React from "react";
import "./Profile.css";
import { IoArrowBackOutline } from "react-icons/io5";
import { ROUTES } from "../utils/routes";
import { saveData } from "../utils/localStorage";


function Profile({ setPage, info, setInfo, openAIKey, setOpenAIKey }) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const updatedOpenAIKey = formData.get("openAIKey");
        const updatedInfo = formData.get("info");
        setOpenAIKey(updatedOpenAIKey);
        setInfo(updatedInfo);
        saveData("openAIKey", updatedOpenAIKey);
        saveData("info", updatedInfo);
    };
    
    return (
        <div className="profile-container">
            <div className="profile-header">
                <h2 className="profile-title">Profile</h2>
                <button onClick={() => { setPage(ROUTES.GENERATOR); }}
                    className="back-button"><IoArrowBackOutline /></button>
        </div>

        <form className="profile-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="openAIKey" className="form-label">
                        Your Open AI Key
                    </label>
                    <input
                        id="openAIKey"
                        name="openAIKey"
                        type="text"
                        className="form-input"
                        placeholder="sk-...1234"
                        defaultValue={openAIKey}
                        required
                    />
            </div>

            <div className="form-group">
                <label htmlFor="info" className="form-label">
                        Summary & Report
                    </label>
                    <textarea
                        id="info"
                        name="info"
                        rows={8}
                        className="form-textarea"
                        placeholder="E.g. extract AUM, IRR, deal summaries, portfolio company key facts…"
                        defaultValue={info}
            />
            </div>

            <div className="button-row">
                <button
                type="button"
                className="ideas-button"
                onClick={() => setPage(ROUTES.IDEAS)}>
                        View Prompt Ideas
                    </button>
                    <button type="submit" className="save-button">
                        Save
                    </button>
                </div>
        </form>
        </div>
    );
}

export default Profile;
