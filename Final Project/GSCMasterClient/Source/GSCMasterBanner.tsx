import GSCMasterLogo from "../wwwroot/Misc/GSCMasterLogo.png";

const css: CSS = {
    GSCMasterLogo: {
        marginTop: "2rem",
        width: "min(300px, 100%)",
        objectFit: "contain"
    }
};

export default function GSCMasterBanner() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                height: "fit-content",
                width: "100%"
            }}
        >
            <img
                src={GSCMasterLogo}
                alt="GSCMasterLogo"
                style={css.GSCMasterLogo}
            />
        </div>
    );
}
