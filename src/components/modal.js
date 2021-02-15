import React from "react";
import ReactDOM from "react-dom";
import { navigate } from "@reach/router";

const modalRoot = document.getElementById("modal-root");

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }
  el = document.createElement("div");
  componentDidMount() {
    modalRoot.appendChild(this.el);
  }
  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  unmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    return this.props.show
      ? ReactDOM.createPortal(
        <div
          style={{
            position: "absolute",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.3)",
          }}
        >
          <div
            style={{
              padding: 20,
              background: "#fff",
              borderRadius: "5px",
              display: "flex",
              flexDirection: "column",
              minHeight: "300px",
              margin: "1rem",
              position: "relative",
              minWidth: "300px",
              boxShadow:
                "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
              justifySelf: "center",
            }}
          >
            Go to Cart?
              <div className="mt-auto d-flex justify-content-around">
              <button
                className="btn btn-secondary"
                // nacin pozivanja hooka unutar klase
                onClick={() => navigate("details").then(() => this.props.setShow)}
              >
                No
                </button>
              <button
                className="btn btn-primary"
                // nacin pozivanja hooka unutar klase
                onClick={() =>
                  navigate("cart").then(() => this.props.setShow)
                }
              >
                Yes
                </button>
            </div>
          </div>
        </div>,
        this.el
      )
      : null;
  }
}

export default Modal;
