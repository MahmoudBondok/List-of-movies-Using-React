import React from "react";
import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";
import Paginat from "./Pagination";
const MoviesList = ({ Movies, GetPage, pageCount }) => {
    return (
        <Row className="mt-3">
            {Movies.length >= 1 ? (Movies.map((mov, index) => {
                return (
                    <CardMovie key={index} mov={mov} />
                )
            })) : <h2 className="text-center">لا يوجد لفلام</h2>}
            {Movies.length >= 1 ? (<Paginat GetPage={GetPage} pageCount={pageCount} />) : null}
        </Row >
    );
};
export default MoviesList;