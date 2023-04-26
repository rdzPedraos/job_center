import { useEffect, useState } from "react";
import { useForm } from "@inertiajs/react";

export function uploadFiles(url, method, fileId = "files", multifile = true) {
    const [drag, setDrag] = useState(false);
    const form = useForm();

    const onSubmit = (e) => {
        if (e) e.preventDefault();
        form[method](url, {
            preserveScroll: true,
            onSucces: () => form.setData("fileId", null),
        });
    };

    useEffect(() => {
        if (form.data[fileId]) {
            onSubmit();
        }
    }, [form.data]);

    return {
        onSubmit,
        dragAndDropEvents: {
            onDragEnter() {
                setDrag(true);
            },
            onDragExit() {
                setDrag(false);
            },
            onDragOver(e) {
                e.preventDefault();
            },
            onDrop(e) {
                e.preventDefault();
                const files = Array.from(e.dataTransfer.files);
                form.setData(fileId, multifile ? files : files[0]);

                setDrag(false);
                onSubmit(e);
            },
        },

        drag,
        data: form.data,
        setData: form.setData,
        errors: form.errors,
    };
}
