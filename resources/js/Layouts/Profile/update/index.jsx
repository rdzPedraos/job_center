import { useState, useContext } from "react";
import { ProfileMenuContext } from "../MenuContext";

import PasswordUpdate from "./partials/Password";
import ProfileUpdate from "./partials/Profile";
import ChangeEmail from "./partials/ChangeEmail";

import {
    AccountBalanceOutlined,
    EmailOutlined,
    KeyOutlined,
} from "@mui/icons-material";
import { AnimatePresence, motion } from "framer-motion";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";

export default function ProfileComponent() {
    const { user, documentTypes } = useContext(ProfileMenuContext);

    const [option, setOption] = useState([0, 0]);
    const [prevOpt, opt] = option;

    const motionPresenceAttr = {
        initial: {
            translateX: prevOpt == opt ? 0 : prevOpt < opt ? "100%" : "-100%",
        },
        animate: { translateX: 0 },
    };

    return (
        <div className="min-h-full lg:w-[600px] overflow-y-scroll overflow-x-hidden">
            <div className="grid grid-rows-[auto,auto,auto,1fr] gap-4  p-5 lg:px-10">
                <img
                    className="w-52 h-52 rounded-full object-cover object-center m-auto"
                    src="/storage/profile-img/trevor.jpg"
                />

                <p className="font-bold text-2xl text-center">{user.name}</p>

                <BottomNavigation
                    value={opt}
                    onChange={(ev, newVal) =>
                        setOption((prev) => [opt, newVal])
                    }
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
        </div>
    );
}
