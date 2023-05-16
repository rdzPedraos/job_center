import { useState, useContext } from "react";
import { ProfileMenuContext } from "@/Context/ProfileContext";

import PasswordUpdate from "./partials/Password";
import ProfileUpdate from "./partials/Profile";
import ChangeEmail from "./partials/ChangeEmail";
import UploadImage from "./partials/UploadImage";

import {
    AccountBalanceOutlined,
    EmailOutlined,
    KeyOutlined,
} from "@mui/icons-material";
import { AnimatePresence, motion } from "framer-motion";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";

export default function ProfileComponent() {
    const [option, setOption] = useState([0, 0]);
    const [prevOpt, opt] = option;

    const { user, documentTypes } = useContext(ProfileMenuContext);

    const motionPresenceAttr = {
        initial: {
            translateX: prevOpt == opt ? 0 : prevOpt < opt ? "100%" : "-100%",
        },
        animate: { translateX: 0 },
    };

    return (
        <div className="flex flex-col gap-4">
            <UploadImage url={user.photo_url} />

            <p className="font-bold text-2xl text-center">{user.name}</p>

            {/* Navegación */}
            <BottomNavigation
                value={opt}
                onChange={(ev, newVal) => setOption((prev) => [opt, newVal])}
            >
                <BottomNavigationAction
                    label="Perfil"
                    icon={<AccountBalanceOutlined />}
                />
                <BottomNavigationAction
                    label="Cambiar correo"
                    icon={<EmailOutlined />}
                />
                <BottomNavigationAction
                    label="Contraseña"
                    icon={<KeyOutlined />}
                />
            </BottomNavigation>

            {/* Contenido a mostrar: */}
            <AnimatePresence>
                {opt == 0 && (
                    <motion.div {...motionPresenceAttr}>
                        <ProfileUpdate
                            user={user}
                            documentTypes={documentTypes}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {opt == 1 && (
                    <motion.div {...motionPresenceAttr}>
                        <ChangeEmail user={user} />
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {opt == 2 && (
                    <motion.div {...motionPresenceAttr}>
                        <PasswordUpdate />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
