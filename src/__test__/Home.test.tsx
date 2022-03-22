import { render, screen } from "@testing-library/react";
import Home from "../Components/Home/Home";
import {
    elementFinder,
    renderWithMemoryRouter,
} from "../Utilities/testUtilities";

describe("Home page", () => {
    test("should render Home page title", () => {
        renderWithMemoryRouter("/", <Home />);

        expect(screen.getByTestId("homePageTitle")).toHaveTextContent(
            "Country Info"
        );
    });

    test("should render input field", async () => {
        renderWithMemoryRouter("/", <Home />);

        await elementFinder("homePageInput");
    });

    test("should button is disable", () => {
        const { getByText } = render(<Home />);
        expect(getByText("submit").closest('button')).toHaveAttribute('disabled');
    })
});