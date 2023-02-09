import SpinnerComponent from "@/Components/spinner";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Dashboard() {
    const [loading, setLoading] = useState(true);

    setTimeout(() => setLoading(false), 3500);

    return (
        <>
            {loading && <SpinnerComponent />}
            <Head title="Dashboard" />
            <p>This is my menu</p>
        </>
    );
}
