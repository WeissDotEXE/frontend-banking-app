import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Card from "./Card";

describe("<Card />", () => {
    test("it should mount", () => {
        render(<Card>test</Card>);

        const card = screen.getByTestId("Card");

        expect(card).toBeInTheDocument();
    });
});
