import React, { Component } from "react";

class IntroModal extends Component {
    state = {
        closeModal() {
            const closeModal = document.querySelector(".introModal");
            closeModal.style.display = "none";
        },
    };
    render() {
        return (
            <div className="introModal">
                <div>Welcome</div>
                <button className="close-modal" onClick={this.state.closeModal}>
                    Close
                </button>
            </div>
        );
    }
}

export default IntroModal;
