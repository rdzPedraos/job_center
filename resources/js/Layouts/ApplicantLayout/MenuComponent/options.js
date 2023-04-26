import { HistoryEdu, ListAlt, WorkOutline } from "@mui/icons-material";

export default [
    {
        description: "Encontrar trabajo",
        route: "applicant.searchJob",
        icon: WorkOutline,
    },
    {
        description: "Mis postulaciones",
        route: "applicant.postulations",
        icon: ListAlt,
    },
    {
        description: "Mi Hoja de Vida",
        route: "applicant.cv.index",
        icon: HistoryEdu,
    },
];
