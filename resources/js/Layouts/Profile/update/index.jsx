import { useState } from "react";
import PasswordUpdate from "./partials/Password";
import ProfileUpdate from "./partials/Profile";
import ChangeEmail from "./partials/ChangeEmail";
import { AnimatePresence, motion } from "framer-motion";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import {
    AccountBalanceOutlined,
    EmailOutlined,
    KeyOutlined,
} from "@mui/icons-material";

export default function ProfileComponent({ user, documentTypes, callClose }) {
    const [option, setOption] = useState([0, 0]);
    const [prevOpt, opt] = option;

    const motionPresenceAttr = {
        initial: {
            translateX: prevOpt == opt ? 0 : prevOpt > opt ? "100%" : "-100%",
        },
        animate: { translateX: 0 },
    };

    return (
        <div className="min-h-full p-5 lg:w-[600px] lg:px-10 overflow-y-scroll overflow-x-hidden">
            <div className="grid gap-4">
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
                                onFinish={callClose}
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
