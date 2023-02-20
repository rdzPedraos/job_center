import React from "react";
import { useState } from "react";
import { usePage } from "@inertiajs/react";
import UserSettingsComponent from "./Settings";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Avatar, Badge } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

export default function ProfileComponent() {
    const [open, setOpen] = useState(false);
    const { name } = usePage().props.auth.user;

    return (
        <section className="flex relative h-full gap-6 items-center">
            <p>{name}</p>
            <Badge
                color="secondary"
                overlap="circular"
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }}
                onClick={() => setOpen((prev) => !prev)}
                badgeContent={
                    <div className="w-2 flex justify-center">
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </div>
                }
                sx={{
                    "&:hover": {
                        cursor: "pointer",
                        opacity: 0.9,
                    },
                }}
            >
                <Avatar alt="Trevor" src="/storage/profile-img/trevor.jpg" />
            </Badge>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ maxHeight: 0, translateY: -10 }}
                        animate={{
                            maxHeight: 1000,
                            translateY: 0,
                        }}
                        exit={{ maxHeight: 0 }}
                        className="absolute top-24 right-0 left-0 bg-white shadow-md rounded-lg overflow-hidden"
                    >
                        <div>
                            <UserSettingsComponent />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
