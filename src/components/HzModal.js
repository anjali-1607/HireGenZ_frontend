import { Fragment, useState, useEffect } from "react";
import ReactDom from "react-dom";
import "./css/HzModal.css";

const Backdrop = (props) => {
    const handleBackdropClick = () => {
        if (props.closeModal) {
            props.closeModal();
        }
    };

    return <div className="cu-backdrop" onClick={handleBackdropClick}></div>;
};

const ModalOverlay = (props) => {
    return (
        <div className={`cu-modal`}>
            <div>{props.children}</div>
        </div>
    );
};

const HzModal = (props) => {
    const [modalPosition, setModalPosition] = useState({
        top: "50%",
        left: "50%",
    });

    useEffect(() => {
        const updateModalPosition = () => {
            const modal = document.querySelector(".cu-modal");
            if (modal) {
                const modalWidth = modal.offsetWidth;
                const modalHeight = modal.offsetHeight;
                const top = `calc(50% - ${modalHeight / 2}px)`;
                const left = `calc(50% - ${modalWidth / 2}px)`;
                setModalPosition({ top, left });
            }
        };

        window.addEventListener("resize", updateModalPosition);
        updateModalPosition();

        return () => {
            window.removeEventListener("resize", updateModalPosition);
        };
    }, []);

    return (
        <Fragment>
            {ReactDom.createPortal(
                <Backdrop closeModal={props?.closeModal} />,
                document.getElementById("overlays")
            )}
            {ReactDom.createPortal(
                <div
                    className={`cu-modal ${props.className}`}
                    style={{
                        top: modalPosition.top,
                        left: modalPosition.left,
                        width: props?.width ? props?.width : "",
                    }}>
                    {props.children}
                </div>,
                document.getElementById("overlays")
            )}
        </Fragment>
    );
};

export default HzModal;
