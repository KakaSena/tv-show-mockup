import General from "../components/General/General";
import Cast from "../components/Cast/Cast";

export const getFooterItems = (show, cast) => [
  {
    id: "general",
    label: "GERAL",
    component: <General show={show} />,
  },
  {
    id: "cast",
    label: "ELENCO",
    component: <Cast cast={cast} />,
  },
];
