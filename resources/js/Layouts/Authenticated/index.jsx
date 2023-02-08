import { useState } from "react";
import { Link } from "@inertiajs/react";
import MainDrawer from "./Drawer";
import { Button } from "@mui/material";

export default function AuthenticatedLayout({ children }) {
    const [open, setOpen] = useState(true);

    const handleDrawerToggle = () => {
        console.log(open);
        //setOpen((before) => !before);
        setOpen(!open);
    };

    return (
        <div className="flex">
            <MainDrawer open={open} handleDrawerToggle={handleDrawerToggle} />

            <div className="flex-auto">
                <div className="bg-secondary w-100">This is header</div>
                <main>
                    <Button onClick={handleDrawerToggle}>Abrir modal</Button>
                    <Link href={route("logout")} method="post" as="button">
                        Salir
                    </Link>
                    {children}

                    <Button color="info" variant="contained" />
                </main>
            </div>
        </div>
    );
}
