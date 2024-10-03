import React from "react";

const Spinner = () => {
    return (
        <div className="tw-flex tw-flex-auto tw-flex-col animated fadeIn tw-justify-center tw-items-center">
            <div className="tw-flex tw-flex-auto tw-items-end tw-justify-center spinner animated fadeIn">
                <div className="pre-load-spinner">
                    <div className="straight"></div>
                    <div className="curve"></div>
                    <div className="center"></div>
                    <div className="inner"></div>
                </div>
            </div>
        </div>
    )
};

export default Spinner;
