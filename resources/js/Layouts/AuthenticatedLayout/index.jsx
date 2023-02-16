import ApplicationLogo from "@/Components/ApplicationLogo";
import SpinnerComponent from "@/Components/spinner";
import { Link, usePage } from "@inertiajs/react";
import { NotificationsOutlined } from "@mui/icons-material";
import { Avatar, Badge } from "@mui/material";
import { useState } from "react";
import ItemMenu from "./item_menu";
import UserSettingsComponent from "./user_settings";

export default function AuthenticatedLayout({ children }) {
    const [loading, setLoading] = useState(true);
    const [openConfig, setOpenConfig] = useState(false);
    const User = usePage().props.auth.user;
    console.log(User);

    setTimeout(() => setLoading(false), 3000);

    return (
        <>
            {loading && <SpinnerComponent />}

            <div className="h-screen w-screen flex flex-col">
                <header className="px-10 grid grid-cols-[auto,1fr,auto] gap-24 border-b-2">
                    <div className="my-4">
                        <ApplicationLogo txtSize="xl" imgSize="7" />
                    </div>

                    <nav>
                        <ul className="h-full flex gap-4">
                            <ItemMenu text="Encontrar Trabajo" active={true} />
                            <ItemMenu text="Postulaciones" />
                            <ItemMenu text="Hoja de Vida" />
                        </ul>
                    </nav>

                    {/* notifications and users */}
                    <section className="h-full flex gap-6 items-center relative">
                        {/* <Badge badgeContent={4} color="primary">
                            <NotificationsOutlined />
                        </Badge> */}
                        <p>{User.name}</p>
                        <Avatar
                            alt="Trevor"
                            src="storage/profile-img/trevor.jpg"
                            sx={{
                                "&:hover": {
                                    cursor: "pointer",
                                    opacity: 0.9,
                                    boxShadow: 2,
                                },
                            }}
                            onClick={() => setOpenConfig(!openConfig)}
                        />
                        {openConfig && (
                            <div className="absolute top-24 right-0 p-5 bg-white shadow-2xl rounded-lg min-w-[200px]">
                                <UserSettingsComponent />
                            </div>
                        )}
                    </section>
                </header>

                <main className="bg-base_white h-full">
                    <Link method="post" href={route("logout")} as="button">
                        Salir
                    </Link>
                    {children}
                </main>
            </div>
        </>
    );
}
